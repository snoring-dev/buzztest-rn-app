import React, { useEffect, useState } from "react";
import shortid from "shortid";
import {
  Label,
  OptionsArea,
  Overlay,
  Selection,
  SelectItem,
  Title,
  TitleArea,
} from "./styles";
import { Portal } from "@gorhom/portal";
import { dispatchEvent } from "../../Utils";

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  title: string;
  options: Option[];
  visible: boolean;
  selectedValue?: Option | null | undefined;
  onChange?: (value?: string | number) => void;
}

const Select = ({
  title,
  options,
  visible = false,
  onChange = () => {},
  selectedValue = null,
  ...props
}: Props) => {
  const [selectOptions, setSelectOptions] = useState<Option[]>(options);
  const [selectedOption, setSelectedOption] = useState<Option | null>(selectedValue);
  const [innerVisible, setInnerVisible] = useState(true);
  const checkIfSelected = (opt: Option) => selectedOption?.value === opt.value;

  const onSelectOption = (opt: Option) => {
    let newSelection: Option | null;
    if (checkIfSelected(opt)) {
      // remove it
      newSelection = null;
    } else {
      // add it
      newSelection = opt;
    }

    setSelectedOption(newSelection);
  };

  useEffect(() => {
    onChange(selectedOption?.value);
  }, [selectedOption]);

  return (
    <Portal>
      <Overlay
        onPress={(e) => {
          e.stopPropagation();
          const { target, currentTarget } = e;
          if (target === currentTarget) {
            dispatchEvent('selection.overlay.clicked', { visible });
          }
        }}
        visible={visible}
      >
        <Selection>
          <TitleArea>
            <Title>{title}</Title>
          </TitleArea>
          <OptionsArea>
            {selectOptions.map((op: Option) => (
              <SelectItem
                onPress={() => onSelectOption(op)}
                selected={checkIfSelected(op)}
                key={shortid.generate()}
              >
                <Label selected={checkIfSelected(op)}>{op.label}</Label>
              </SelectItem>
            ))}
          </OptionsArea>
        </Selection>
      </Overlay>
    </Portal>
  );
};

export default Select;

import { Menu } from "../../Store/Menu/types";
import { razzleDazzleRose, silver } from "../../Utils/Colors";

export const ListOfMenus: Menu[] = [
  {
    id: 1,
    name: "CAMPAIGNS",
    icon: {
      lib: "Ionicons",
      name: "ios-home",
      color: silver,
      hoverColor: razzleDazzleRose,
    },
    default: false,
  },
  {
    id: 2,
    name: "POSTS",
    icon: {
      lib: "FontAwesome",
      name: "newspaper-o",
      color: silver,
      hoverColor: razzleDazzleRose,
    },
    default: true,
  },
  {
    id: 3,
    name: "INBOX",
    icon: {
      lib: "Ionicons",
      name: "mail-outline",
      color: silver,
      hoverColor: razzleDazzleRose,
    },
    default: false,
  },
  {
    id: 4,
    name: "YOU",
    icon: {
      lib: "Feather",
      name: "user",
      color: silver,
      hoverColor: razzleDazzleRose,
    },
    default: false,
  },
];

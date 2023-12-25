import { FailureState } from "../../../types";

export interface InstagramFormat {
  titre: string;
  type: string;
  arguments: string[];
  nb_posts: number;
}

export interface SoacialNetwork {
  instagram_formats: InstagramFormat[];
}

export interface Creator {
  nombre: string;
  budget: string;
  selected: boolean;
  type: string;
}

export interface Preview {
  cover: string;
  goals: string[];
  soacialNetwork: SoacialNetwork;
  iwant: string[];
  iwont: string[];
  preview: string[];
  creators: Creator[];
}

export interface CompainDetails {
  cover: string;
  id: number;
  name: string;
  dateCreation: Date;
  type: number;
  description: string;
  preview: Preview;
}

export interface Brand {
  id: number;
  name: string;
  cover: string;
  type: number;
  description: string;
  preview: string;
}

export interface BrandState {
  data: Brand[];
  isLoading?: boolean;
  failure?: FailureState | null;
  selectedProduct?: CompainDetails;
}

export enum BrandActionTypes {
  SET_BRANDS_DATA = "@app/brands/SET_BRANDS_DATA",
  SET_BRANDS_FAILED = "@app/brands/SET_BRANDS_FAILED",
  SET_BRANDS_LOADING = "@app/brands/SET_BRANDS_LOADING",
  SET_SELECTED_PRODUCT = "@app/brands/SET_SELECTED_PRODUCT",
}

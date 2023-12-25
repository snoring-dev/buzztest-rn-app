import request from "../../Utils/Http";
import { Category, RegistrationData } from "./types";

export const getAllCategories = async () => {
  const cats = await request({
    url: "/categories",
    method: "GET",
  });

  return cats.map((c: any) => {
    const cat: Category = { label: c.name, value: c.slug };
    return cat;
  });
};

export const saveUser = async (userData: RegistrationData) => {
  const resp = await request({
    url: "/influencers",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  });
  return resp;
};

import { getValueFor } from "../../Utils";
import { Constants } from "../../Utils/Constants";
import request from "../../Utils/Http";

export const executeAuth = async (username: string, password: string) => {
  const resp = await request(
    {
      url: "/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { username, password, api_source: true },
    },
    true
  );
  return resp;
};

export const getUserInfo = async () => {
  const sessionToken = await getValueFor(Constants.SESSION_TOKEN);
  const resp = await request(
    {
      url: "/influencer/me",
      method: "GET",
      headers: {
        "Cookie": sessionToken,
      },
    }
  );
  return resp;
};
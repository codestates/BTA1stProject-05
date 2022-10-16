import { atom } from "recoil";

export const usernameState = atom({
  key: "username",
  default: null,
});

export const passwordState = atom({
  key: "password",
  default: null,
});

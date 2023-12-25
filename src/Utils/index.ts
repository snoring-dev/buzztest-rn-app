import Emitter from "tiny-emitter";
import * as SecureStore from "expo-secure-store";
import {
  compose,
  equals,
  join,
  map,
  reject,
  replace,
  split,
  trim,
} from "ramda";

const emitter = new Emitter();

export async function saveKey(key: string, value: any) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key);

  if (result) {
    return result;
  }

  return null;
}

export const dispatchEvent = (name: string, params: any) => {
  emitter.emit(name, params);
};

export const on = (name: string, callback: () => void) => {
  emitter.on(name, callback);
};

export const off = (name: string, handler: () => void) => {
  emitter.off(name, handler);
};

export const formatDescription = compose(
  join(" "),
  reject(equals("")),
  map(trim),
  split("<br />"),
  replace(/\\n/g, "<br />")
);

export function nanoId(digits = 10) {
  let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ";
  let uuid = [];
  for (let i = 0; i < digits; i++) {
    uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join("");
}

export function patchJS() {
  String.prototype.stripSlashes = function() {
    return this.replace(new RegExp("\\\\", "g"), "");
  };
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

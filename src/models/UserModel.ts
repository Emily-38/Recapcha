import { getLocalStorage, saveLocalStorage } from "../Service/localStorage";
import type { Formulaire } from "../Types/Formulaire";

export function saveUser(formData: Formulaire) {
  saveLocalStorage("user", JSON.stringify(formData));
}

export function getUser() {
  let user = getLocalStorage("user");

  if (user) {
    return JSON.parse(user);
  }
}

export function updateUser() {
  let user = getUser();

  user["isHuman"] = true;

  saveLocalStorage("user", JSON.stringify(user));
}

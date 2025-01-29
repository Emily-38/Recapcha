import { getLocalStorage, saveLocalStorage } from "../Service/localStorage";

export function saveReponse(reponses: boolean) {
  saveLocalStorage("reponse", JSON.stringify(reponses));
}

export function getReponse() {
  let reponses = getLocalStorage("reponse");

  if (reponses) {
    return JSON.parse(reponses);
  }
}

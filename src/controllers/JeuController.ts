import { saveReponse } from "../models/JeuModel";

export function submitReponse(reponses: boolean) {
  saveReponse(reponses);

  if (reponses == true) {
    window.location.href = "/result";
  } else {
    window.location.href = "/";
  }
}

// export function getReponse(reponses: boolean) {
//   getReponse();
// }

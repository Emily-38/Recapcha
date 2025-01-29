import { saveReponse } from "../models/JeuModel";

export function submitReponse(reponses: boolean) {
  saveReponse(reponses);

  if (reponses == true) {
    // changer ici le chemin pour la page de réponse
    window.location.href = "/bubble";
  } else {
    window.location.href = "/result";
  }
}

// export function getReponse(reponses: boolean) {
//   getReponse();
// }

import { saveReponse } from "../models/JeuModel";

export function submitReponse(reponses: boolean) {
  saveReponse(reponses);
}

// export function submitReponse(reponses: boolean[]) {
//   saveReponse(reponses);
// }

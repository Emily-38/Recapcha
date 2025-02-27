

export function saveReponse(reponses: boolean) {
 localStorage.setItem("reponse", JSON.stringify(reponses));
}

export function getReponse() {
  let reponses = localStorage.getItem("reponse");

  if (reponses) {
    return JSON.parse(reponses);
  }
}

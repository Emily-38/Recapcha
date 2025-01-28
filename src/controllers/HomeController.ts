import { saveUser } from "../models/UserModel";
import type { Formulaire } from "../Types/Formulaire";

export function submitForm(formData: Formulaire) {
  saveUser(formData);
}

import { LocalStorageProvider} from "../models/UserModel";
import type { Formulaire } from "../Types/Formulaire";

export function submitForm(formData: Formulaire) {
  const localStorageProvider = new LocalStorageProvider();
  localStorageProvider.save(formData);
}

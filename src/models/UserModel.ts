import {  StorageProvider } from "../Service/localStorage";
import type { Formulaire } from "../Types/Formulaire";

class LocalStorageProvider extends StorageProvider {
 
  save(formData: Formulaire): void {
    localStorage.setItem("user", JSON.stringify(formData));
  }
  user(): Formulaire | null {
    let user = localStorage.getItem("user");

    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
  updateUser(): void {
    let user = this.user();

    if (user) {
      user["isHuman"] = true;
      localStorage.setItem("user", JSON.stringify(user));
    }
  }
  }


export{LocalStorageProvider}

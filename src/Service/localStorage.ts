import type { Formulaire } from "../Types/Formulaire";

export abstract class StorageProvider {
    abstract save(form:Formulaire): void
    abstract user(name: string):void
    
}


export function saveLocalStorage(name: string, values: string) {
  localStorage.setItem(name, values);
}

export function getLocalStorage(name: string) {
  return localStorage.getItem(name);
}

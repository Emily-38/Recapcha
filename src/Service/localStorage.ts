export function saveLocalStorage(name: string, values: string) {
  localStorage.setItem(name, values);
}

export function getLocalStorage(name: string) {
  return localStorage.getItem(name);
}

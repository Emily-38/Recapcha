export const removeDupes = (array: string[]) => {
    return [...new Set(array)];
  };
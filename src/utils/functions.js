export const getImageUrl = imageParameter => {
  return new URL(`../assets/images/${imageParameter}`, import.meta.url);
}

export const getIconImageUrl = iconParameter => {
  return new URL(`../assets/logos/${iconParameter}`, import.meta.url);
}
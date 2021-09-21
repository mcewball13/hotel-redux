export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

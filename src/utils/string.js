export default function capitalizeFirstLetter(string) {
  return string.replace(/^[A-Z]/, char => char.toLowerCase())
}

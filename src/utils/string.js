export default function capitalizeFirstLetter(string) {
  return string.toLowerCase().replace(/\b[a-z]/g, function(match) {
    return match.toUpperCase()
  })
}

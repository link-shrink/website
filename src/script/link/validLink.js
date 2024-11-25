export function isValidLink(link) {
  const regex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9#]+\/?)*$/
  return regex.test(link)
}

export function sendToLink(link) {
  const a = document.createElement('a')
  a.href = link
  a.click()
}

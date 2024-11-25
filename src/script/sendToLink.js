export function sendToLink(link) {
  const a = document.createElement('a')
  a.href = getLink(link)

  a.click()
}

function getLink(link) {
  if (link.startsWith('https://')) return link
  return `https://${link}`
}

export async function createShortLink(link) {
  const response = await fetch('https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ link }),
  })

  return await response.json()
}

export async function getOriginalLink(linkId) {
  const response = await fetch(`https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/${linkId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return data
}

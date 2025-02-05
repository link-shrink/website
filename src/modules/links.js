export async function createShortLink(link) {
  const response = await fetch('https://api.keskn.uz/link/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ link }),
  })

  return await response.json()
}

export async function getOriginalLink(linkId) {
  const response = await fetch(`https://api.keskn.uz/link/${linkId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return data
}

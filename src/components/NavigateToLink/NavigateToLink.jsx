import { useRef } from 'react'
import { useGetFirestore } from '../../hooks/useFirebase'
import { sendToLink } from '../../script/sendToLink'

export default function NavigateToLink() {
  const url = useRef(window.location.pathname).current
  const [data] = useGetFirestore(`links/${url.split('/').at(-1)}`)

  if (data === 'loading') return <h1>Loading link</h1>
  if (!data.long_link) return <h1>Link not found</h1>

  sendToLink(data.long_link)
  return <h1>{data.long_link}</h1>
}

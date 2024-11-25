import { useRef, useState, useEffect } from 'react'
import { useGetFirestore } from '../../hooks/useFirebase'
import { sendToLink } from '../../script/sendToLink'
import './NavigateToLink.css'

export default function NavigateToLink() {
  const url = useRef(window.location.pathname).current
  const [data] = useGetFirestore(`links/${url.split('/').at(-1)}`)
  const [txt, setTxt] = useState('Loading Link')

  useEffect(() => {
    if (data === 'loading') {
      setTxt('Loading link')
    } else if (!data?.original_link) {
      setTxt('Link not found')
    } else {
      setTxt('Bye')
      sendToLink(data.original_link)
    }
  }, [data])

  return (
    <div className="navigate_to_link">
      <h1>{txt}</h1>
    </div>
  )
}

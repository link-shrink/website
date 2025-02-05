import { useRef, useState, useEffect } from 'react'
import { sendToLink } from '../../script/sendToLink'
import { getOriginalLink } from '../../modules/links'
import './NavigateToLink.css'

export default function NavigateToLink() {
  const url = useRef(window.location.pathname).current
  const [data, setData] = useState(null)
  const [txt, setTxt] = useState('Loading Link')

  useEffect(() => {
    async function loadData() {
      const originalLink = await getOriginalLink(url.split('/').at(-1))
      setData(originalLink)
    }

    loadData()
  }, [url])

  useEffect(() => {
    if (data === null) {
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

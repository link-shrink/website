import { useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { getShortLinkID } from '../../script/link/getShortLinkID'
import './Home.css'
import copyIcon from '../../media/icons/copy.svg'
import generateIcon from '../../media/icons/generate.svg'

export default function Home() {
  const [linkID, setLinkID] = useState('')
  const [showCopied, setShowCopied] = useState(false)
  const [inputVal, setInputVal] = useState('')

  function copy() {
    navigator.clipboard
      .writeText(`aj-linkshrink.web.app/l/${linkID}`)
      .then(() => {
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
      })
  }

  async function getLinkID() {
    if (!inputVal) return
    setLinkID('loading')
    const shortLink = await getShortLinkID(inputVal.trim())
    if (!shortLink.ok) {
      setInputVal('')
      setLinkID('Error occured try again')
      return
    }
    setLinkID(shortLink.data.link_id)
  }

  return (
    <>
      <div className="container container_content d_f_ce">
        <div className="list_y home_container">
          <div className="list_x">
            <Input
              placeholder="URL"
              autoFocus={true}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <Button
              className="home_copy_btn"
              onClick={getLinkID}
              disabled={linkID === 'loading'}
            >
              <img className="icon" src={generateIcon} alt="genetare" />
            </Button>
          </div>
          {linkID &&
            linkID !== 'loading' &&
            linkID !== 'Error occured try again' && (
              <>
                <div className="list_x">
                  <Input
                    value={`aj-linkshrink.web.app/l/${linkID}`}
                    placeholder="URL"
                    readOnly={true}
                  />
                  <Button className="home_copy_btn" onClick={copy}>
                    <img className="icon" src={copyIcon} alt="copy" />
                  </Button>
                </div>
                <div className={`copied_msg ${showCopied ? 'show' : ''}`}>
                  Copied
                </div>
              </>
            )}
          {linkID === 'loading' && (
            <Input
              value="Generating short link"
              className="home_readonly_input"
              readOnly={true}
            />
          )}
          {linkID === 'Error occured try again' && (
            <Input
              value="Error occured try again"
              className="home_readonly_input"
              readOnly={true}
            />
          )}
        </div>
      </div>
    </>
  )
}

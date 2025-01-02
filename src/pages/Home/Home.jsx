import { useRef, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { isValidLink } from '../../script/link/validLink'
import { getShortLinkID } from '../../script/link/getShortLinkID'
import './Home.css'
import { ReactComponent as CopyIcon } from '../../media/icons/copy.svg'
import { ReactComponent as GenerateIcon } from '../../media/icons/generate.svg'

export default function Home() {
  const linkInput = useRef()
  const [linkID, setLinkID] = useState('')
  const [showCopied, setShowCopied] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const statesForID = useRef({
    loading: 'Generating short link',
    error: 'Error occured try again',
  }).current

  function copy() {
    navigator.clipboard
      .writeText(`aj-linkshrink.web.app/l/${linkID}`)
      .then(() => {
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
      })
  }

  async function getLinkID() {
    if (!isValidLink(inputVal)) {
      setLinkID('invalid')
      linkInput.current.focus()
      return
    }
    if (!inputVal) return
    setLinkID('loading')
    const shortLink = await getShortLinkID(inputVal.trim())
    if (!shortLink.ok) {
      setInputVal('')
      setLinkID('error')
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
              ref={linkInput}
              className={`${
                linkID === 'invalid' ? 'home_link_input invalid' : ''
              }`}
              placeholder="URL"
              autoFocus={true}
              onChange={(e) => {
                setInputVal(e.target.value)
                if (linkID === 'invalid') setLinkID('')
              }}
            />
            <Button
              className="home_copy_btn"
              onClick={getLinkID}
              disabled={linkID === 'loading'}
            >
              <GenerateIcon className="icon" />
            </Button>
          </div>
          {linkID &&
            linkID !== 'loading' &&
            linkID !== 'error' &&
            linkID !== 'invalid' && (
              <>
                <div className="list_x">
                  <Input
                    value={`aj-linkshrink.web.app/l/${linkID}`}
                    placeholder="URL"
                    readOnly={true}
                  />
                  <Button className="home_copy_btn" onClick={copy}>
                    <CopyIcon className="icon" />
                  </Button>
                </div>
                <div className={`copied_msg ${showCopied ? 'show' : ''}`}>
                  Copied
                </div>
              </>
            )}
          {(linkID === 'loading' || linkID === 'error') && (
            <Input
              value={statesForID[linkID]}
              className="home_readonly_input"
              readOnly={true}
            />
          )}
        </div>
      </div>
    </>
  )
}

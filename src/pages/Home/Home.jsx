import { useRef, useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import HomeMilestones from './HomeMilestones/HomeMilestones'
import { isValidLink } from '../../script/link/validLink'
import { createShortLink } from '../../modules/links'
import './Home.css'
import { ReactComponent as CopyIcon } from '../../media/icons/copy.svg'
import { ReactComponent as GenerateIcon } from '../../media/icons/generate.svg'

export default function Home() {
  const linkInput = useRef()
  const [shortLink, setShortLink] = useState('')
  const [showCopied, setShowCopied] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const statesForID = useRef({
    loading: 'Generating short link',
    error: 'Error occured try again',
  }).current

  function copy() {
    navigator.clipboard.writeText(shortLink).then(() => {
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000)
    })
  }

  async function getLinkID() {
    if (!isValidLink(inputVal)) {
      setShortLink('invalid')
      linkInput.current.focus()
      return
    }
    if (!inputVal) return
    setShortLink('loading')
    const shortLink = await createShortLink(inputVal.trim())
    console.log(shortLink)
    if (!shortLink.ok) {
      setInputVal('')
      setShortLink('error')
      return
    }
    setShortLink(shortLink.short_link)
  }

  return (
    <>
      <div className="container container_content home_container d_f_ce">
        <div className="list_y">
          <div className="list_x">
            <Input
              ref={linkInput}
              className={`${
                shortLink === 'invalid' ? 'home_link_input invalid' : ''
              }`}
              placeholder="URL"
              autoFocus={true}
              onChange={(e) => {
                setInputVal(e.target.value)
                if (shortLink === 'invalid') setShortLink('')
              }}
            />
            <Button
              className="home_copy_btn"
              onClick={getLinkID}
              disabled={shortLink === 'loading'}
            >
              <GenerateIcon className="icon" />
            </Button>
          </div>
          {shortLink &&
            shortLink !== 'loading' &&
            shortLink !== 'error' &&
            shortLink !== 'invalid' && (
              <>
                <div className="list_x">
                  <Input value={shortLink} placeholder="URL" readOnly={true} />
                  <Button className="home_copy_btn" onClick={copy}>
                    <CopyIcon className="icon" />
                  </Button>
                </div>
                <div className={`copied_msg ${showCopied ? 'show' : ''}`}>
                  Copied
                </div>
              </>
            )}
          {(shortLink === 'loading' || shortLink === 'error') && (
            <Input
              value={statesForID[shortLink]}
              className="home_readonly_input"
              readOnly={true}
            />
          )}
        </div>
        <HomeMilestones />
      </div>
    </>
  )
}

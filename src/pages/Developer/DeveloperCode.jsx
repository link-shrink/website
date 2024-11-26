import { useRef, useState } from 'react'
import Button from '../../components/Button/Button'
import { codeExamples } from '../../info/codeExamples'
import copyIcon from '../../media/icons/copy.svg'

export default function DeveloperCode() {
  const [activeExample, setActiveExample] = useState({
    get: 'javascript',
    post: 'javascript',
  })
  const devLanButtons = useRef([
    { text: 'JavaScipt', value: 'javascript' },
    { text: 'Python', value: 'python' },
    { text: 'Java', value: 'java' },
    { text: 'PHP', value: 'php' },
    { text: 'Ruby', value: 'ruby' },
    { text: 'Go', value: 'go' },
  ]).current
  const [showCopied, setShowCopied] = useState(false)

  function copy(code) {
    navigator.clipboard.writeText(code).then(() => {
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000)
    })
  }

  return (
    <>
      <div className={`copied_msg ${showCopied ? 'show' : ''}`}>Copied</div>
      <div className="dev_sub_title">Get</div>
      <div className="dev_lan_con list_y">
        <div className="dev_lans list_x">
          {devLanButtons.map((btn, i) => {
            return (
              <Button
                key={i}
                value={btn.value}
                className={`${activeExample.get === btn.value ? 'active' : ''}`}
                onClick={() =>
                  setActiveExample({ ...activeExample, get: btn.value })
                }
              >
                {btn.text}
              </Button>
            )
          })}
        </div>
        <div className="dev_code">
          <pre>{codeExamples.get[activeExample.get].code}</pre>
          <Button
            className="dev_btn"
            onClick={() => copy(codeExamples.get[activeExample.get].code)}
          >
            <img className="icon" src={copyIcon} alt="copy" />
          </Button>
        </div>
      </div>
      <div className="dev_sub_title">Post</div>
      <div className="dev_lan_con list_y">
        <div className="dev_lans list_x">
          {devLanButtons.map((btn, i) => {
            return (
              <Button
                key={i}
                value={btn.value}
                className={`${
                  activeExample.post === btn.value ? 'active' : ''
                }`}
                onClick={() =>
                  setActiveExample({ ...activeExample, post: btn.value })
                }
              >
                {btn.text}
              </Button>
            )
          })}
        </div>
        <div className="dev_code">
          <pre>{codeExamples.post[activeExample.post].code}</pre>
          <Button
            className="dev_btn"
            onClick={() => copy(codeExamples.post[activeExample.post].code)}
          >
            <img className="icon" src={copyIcon} alt="copy" />
          </Button>
        </div>
      </div>
    </>
  )
}

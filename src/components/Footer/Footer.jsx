import { useRef } from 'react'
import './Footer.css'

export default function Footer() {
  const year = useRef(new Date().getFullYear()).current

  return (
    <>
      <div className="container">
        <footer className="footer d_f_ce">
          <div className="footer_text">© {year} aj-linkshrink.web.app</div>
        </footer>
      </div>
    </>
  )
}

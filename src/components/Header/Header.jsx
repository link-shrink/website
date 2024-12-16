import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="header d_f_ai_ce d_f_jc_sb">
          <div className="logo">
            <Link to="/">Linkshrink</Link>
          </div>
          <div className="header_items list_x">
            <Link to="/dev">Developer</Link>
            <Link to="https://akbarswe.uz">About me</Link>
          </div>
        </div>
      </div>
    </>
  )
}

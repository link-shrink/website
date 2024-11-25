import { Link } from 'react-router-dom'
import githubIcon from '../../media/icons/github.svg'

export default function DeveloperSocialMedia() {
  return (
    <>
      <div className="list_y">
        <div className="dev_sub_title">Social medias</div>
        <div className="d_f_ce">
          <Link to="https://github.com/AJ-LinkShrink">
            <img
              className="dev_social_media_icon"
              src={githubIcon}
              alt="github"
            />
          </Link>
        </div>
        <hr />
      </div>
    </>
  )
}

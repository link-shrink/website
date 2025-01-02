import { Link } from 'react-router-dom'
import { ReactComponent as GithubIcon } from '../../media/icons/github.svg'

export default function DeveloperSocialMedia() {
  return (
    <>
      <div className="list_y">
        <div className="dev_sub_title">Social medias</div>
        <div className="d_f_ce">
          <Link to="https://github.com/AJ-LinkShrink">
            <GithubIcon className="dev_social_media_icon" />
          </Link>
        </div>
        <hr />
      </div>
    </>
  )
}

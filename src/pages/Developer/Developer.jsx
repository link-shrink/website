import { Link } from 'react-router-dom'
import DeveloperCode from './DeveloperCode'
import DeveloperSocialMedia from './DeveloperSocialMedia'
import './Developer.css'

export default function Developer() {
  return (
    <>
      <div className="container container_content dev_list_y">
        <div className="dev_title">Keskn API</div>
        <DeveloperSocialMedia />
        <div className="list_y">
          <div className="dev_sub_title">Overview</div>
          <p>
            <Link to="https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/docs">
              <span>
                l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net
              </span>
            </Link>{' '}
            Keskn is a simple URL shortening API that allows you to convert long
            URLs into shorter, more manageable links. It uses FastAPI for the
            backend and integrates with Firebase Firestore for storage. The API
            is deployed on Microsoft Azure for reliable hosting and scalability.
          </p>
        </div>
        <DeveloperCode />
      </div>
    </>
  )
}

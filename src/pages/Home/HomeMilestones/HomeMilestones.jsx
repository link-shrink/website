import { useGetFirestore } from '../../../hooks/useFirebase'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import { formatNumberLocalized } from '../../../script/convert/numbers'
import './HomeMilestones.css'

export default function HomeMilestones() {
  const [milestones] = useGetFirestore('milestones/links')

  if (milestones === 'notfound') return null
  if (milestones === 'loading')
    return (
      <>
        <div className="milestones_con d_f_ce">
          <LoadingSpinner />
        </div>
      </>
    )

  return (
    <>
      <div className="milestones_con list_x">
        <div className="milestones_item list_y">
          <div className="milestones_item_num d_f_ce">
            {formatNumberLocalized(milestones.quantity)}
          </div>
          <div className="milestones_item_text d_f_ce">links were shorten</div>
        </div>
        <div className="milestones_item list_y">
          <div className="milestones_item_num d_f_ce">
            {formatNumberLocalized(milestones.original_length)}
          </div>
          <div className="milestones_item_text d_f_ce">length of links</div>
        </div>
        <div className="milestones_item list_y">
          <div className="milestones_item_num d_f_ce">
            {formatNumberLocalized(
              ((milestones.original_length - milestones.short_length) * 100) /
                milestones.original_length
            ) || '0'}
            %
          </div>
          <div className="milestones_item_text d_f_ce">links reduced</div>
        </div>
      </div>
    </>
  )
}

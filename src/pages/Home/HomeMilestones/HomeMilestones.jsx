import { useGetFirestoreRealTime } from '../../../hooks/useFirebase'
import HomeMilestonesItem from './HomeMilestonesItem/HomeMilestonesItem'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import { formatNumberLocalized } from '../../../script/convert/numbers'
import './HomeMilestones.css'

export default function HomeMilestones() {
  const [milestones] = useGetFirestoreRealTime('milestones/links')

  if (milestones === 'notfound') return null
  if (milestones === 'loading')
    return (
      <>
        <div className="milestones_con d_f_ce">
          <LoadingSpinner />
        </div>
      </>
    )

  function getPercentage(original, short) {
    const percentage = ((original - short) * 100) / original || 0
    return percentage.toFixed()
  }

  return (
    <>
      <div className="milestones_con list_x">
        <HomeMilestonesItem
          num={formatNumberLocalized(milestones.quantity).parts.number}
          text="links shortened"
          suffix={formatNumberLocalized(milestones.quantity).parts.suffix}
        />
        <HomeMilestonesItem
          num={formatNumberLocalized(milestones.original_length).parts.number}
          text="original link length"
          suffix={
            formatNumberLocalized(milestones.original_length).parts.suffix
          }
        />
        <HomeMilestonesItem
          num={getPercentage(
            milestones.original_length,
            milestones.short_length
          )}
          text="reduction achieved"
          suffix="%"
        />
      </div>
    </>
  )
}

import { useEffect, useState } from 'react'
import NumberFlow from '@number-flow/react'
import './HomeMilestonesItem.css'

export default function HomeMilestonesItem({ num: iNum, text, ...props }) {
  const [num, setNum] = useState(0)

  useEffect(() => {
    setNum(iNum)
  }, [iNum])

  return (
    <>
      <div className="milestones_item list_y">
        <NumberFlow
          value={num}
          className="milestones_item_num d_f_ce"
          {...props}
        />
        <div className="milestones_item_text d_f_ce">{text}</div>
      </div>
    </>
  )
}

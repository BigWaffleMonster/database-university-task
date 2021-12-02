import React, {FC} from 'react'
import {propTypes} from './types'
import {NavLink} from 'react-router-dom'

const ScheduleList: FC<propTypes> = (props) => {
  return (
    <div>
      {props.scheduleLists.map((el: any) => {
        return (
          <ul>
            <li>{el.playsScheduleListName}</li>
            <NavLink to={`/schedule/${el.playsListRef}`}><button>open</button></NavLink>
          </ul>
        )
      })}
    </div>
  )
}

export default ScheduleList
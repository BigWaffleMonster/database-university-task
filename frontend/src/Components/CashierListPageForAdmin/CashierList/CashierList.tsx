import React, {FC} from 'react'
import {propType} from './types'

const CashierList: FC<propType> = (props) => {
  return (
    <div>
      {props.cashiers?.map((el: any) => {
        return (
          <ul>
            <li>{el.name}</li>
            <li>{el.surname}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default CashierList
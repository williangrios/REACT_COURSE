import React from 'react'
import CompProps from '../../components/CompProps/CompProps'

const AulaProps = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <CompProps textcomponent={props.textcomponent}/> 

    </div>
  )
}

export default AulaProps
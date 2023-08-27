import React from 'react'
import Counder from './Counder'

function PegesOne({count, setCount}) {
  return (
    <div>PegesOne
      <Counder count={count} setCount={setCount}></Counder>
    </div>
  )
}

export default PegesOne
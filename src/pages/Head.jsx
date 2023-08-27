import React, { useContext, useState } from 'react'
import PegesOne from '../components/PegesOne'
import PegesTwo from '../components/PegesTwo'
import { CounterContext } from '../provider/Provider'

function Head() {
    const {count}= useContext(CounterContext)
    return (
        <div className='border-solid border-2 border-indigo-600 p-10'>
            <h1 className="text-7xl">{count}</h1>
            <PegesOne></PegesOne>
            <PegesTwo></PegesTwo>
              

        </div>
    )
}

export default Head
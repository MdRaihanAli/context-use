import React, { useContext } from 'react'
import { CounterContext } from '../provider/Provider'

function Counder() {
    const {count, setCount}= useContext(CounterContext)
    return (
        <div>
           
            <button onClick={() => setCount(count + 1)} class="btn btn-primary">Button</button>
            <button  onClick={() => setCount(count - 1)} class="btn btn-primary">Button</button>
        </div>
    )
}

export default Counder
import React, { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';



export default function Counter(){
    const[count,setCount]=useState(0);

    function incCouPar(by){
        setCount(count+by)
    }

    function decCouPar(by){
        setCount(count-by)
    }

    function resetFunction(){
        setCount(0)
        }

    return (
        <>
        <span className='totalcount'>{count}</span>
        <CounterButton by={1} incCouPar={incCouPar} decCouPar={decCouPar}/>
      <CounterButton by={2} incCouPar={incCouPar}  decCouPar={decCouPar}/>
      <CounterButton by={3} incCouPar={incCouPar}  decCouPar={decCouPar}/>
      <button className='counterButton' onClick={resetFunction} >Reset</button>
        </>
    )
}


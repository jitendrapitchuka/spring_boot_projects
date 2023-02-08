import {PropTypes} from 'prop-types'
export default function CounterButton({by,incCouPar,decCouPar}) {

   //  const[count,setCount]=useState(0);

return (
    <div>
 
<div>
    <button className='counterButton' onClick={()=>incCouPar(by)} >{+by}</button>
    <button className='counterButton' onClick={()=>decCouPar(by)} >{-by}</button>
    
</div>

    </div>
  )
}

CounterButton.propTypes={
    by:PropTypes.number
}
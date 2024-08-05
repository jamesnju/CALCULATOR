import React, { useState } from 'react'

const DialKeys = () => {
  const [number, setNumber] = useState(0);
  const [operations, setOperations] = useState();

  const handleNumber = (e) => {
    setNumber(number + e.target.value)
  }

  return (
    <div className='keymains '>
      <div className="content">
        <div className="screen">
          {/* <p className="result">{number}</p> */}
          <input type="text" className='result' value={number} />
        </div>
        <div className="group1 bg-red-500">
          <button className='btn' value={""} onClick={(e) => { setNumber("") }}>AC</button>
          <button className='btn' value={""} onClick={(e) => setNumber(number.slice(0, -1))}>Del</button>
          <button className='btn' value={"00"} onClick={handleNumber}>00</button>
          <button className='btn' value={"."} onClick={handleNumber}>.</button>

    
        </div>
        
        <div className="group1 bg-red-500">
          <button className='btn' value={1} onClick={handleNumber}>1</button>
          <button className='btn' value={2} onClick={handleNumber}>2</button>
          <button className='btn' value={3} onClick={handleNumber}>3</button>
          <button className='btn' value={"/"} onClick={handleNumber}>/</button>

        </div>
        <div className="flex2">
          <button className='btn' value={4} onClick={handleNumber}>4</button>
          <button className='btn' value={5} onClick={handleNumber}>5</button>
          <button className='btn' value={6} onClick={handleNumber}>6</button>
          <button className='btn' value={"+"} onClick={handleNumber}>+</button>

        </div>
        <div className="flex3">
          <button className='btn' value={7} onClick={handleNumber}>7</button>
          <button className='btn' value={8} onClick={handleNumber}>8</button>
          <button className='btn' value={9} onClick={handleNumber}>9</button>
          <button className='btn' value={"*"} onClick={handleNumber}>x</button>
        </div>
        <div className="flex2">
          <button className='btn' value={0} onClick={handleNumber}>0</button>
          <button className='btn' value={"-"} onClick={handleNumber}>-</button>
          <button className='btn equel' onClick={() => setNumber(eval(number))}>=</button>
        </div>
      </div>


    </div>
  )
}

export default DialKeys
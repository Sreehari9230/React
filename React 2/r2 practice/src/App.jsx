import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0)
  useEffect(()=>{
    setCount(c => c+1)
  },[])

  const fun = useCallback(()=>{
    setCount(c => c+1)
  },[count])

  const a = useRef(0)

  const arr = [1,2,3,4,5]
  const  reduceing = arr.reduce((a,b)=>a+b,0)
  const maping = arr.map((a)=>a*10)
  const filtering = arr.filter((a)=>a>5)
  

  return (
    <div>
      <p ref={a}>{count}</p>
    </div>
  )
}

export default App





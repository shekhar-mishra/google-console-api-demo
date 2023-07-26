import { useState } from "react"

export default function Home() {
    const [count,setCount]=useState(0)
    
    const increaseCount =()=>{
        setCount(count+1)
    }
    return (
        <div>
             <h1>Home</h1>
             <button onClick={increaseCount}>Click Me</button>
             <h3>You clicked {count} times</h3>
        </div>
    )
  }
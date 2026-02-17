import React, { useState } from 'react'
import Button from './Button'

const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>My name is pasang</h1>
      <Button ButtonText="Home" />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Home


{/* - Third method -- without hooks
const Home = () => {
  var count = 0
  const increaseCount = ()={
    count = count+1
    console.log(count)
  }
  return{
    <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>+</button>
    <div/>
  }
  }
*/}

{/* 2nd method --without using hooks method
  class Home extends Component{
  constructor(){
   super()

   console.log("Constructor called")
   this.state = {
   count : 0
   }
   }

   increaseCounter(){
    this.setState({count : this.state.count + 1})
   }

   render(){
    return(
    <div>
    <h1>Count : {this.state.count}</h1>
    <button onClick={()=>this.increaseCounter()>+</button>}
    </div>
    )
   }
  }

  */}
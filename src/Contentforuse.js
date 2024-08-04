import React from 'react'
import { useState } from 'react'; //hooks only in { }

   const Content = () => {
  //     function handNAmeChange(){
  //         const names =["sandy","musraf","sam"];
  //         const ran =Math.floor(Math.random()*3);
  //         return names[ran]
  //     }
    

const [names,setname] =useState("ss");
const change=()=>{
  const names =["sandy","musraf","sam"];
        const ran =Math.floor(Math.random()*3)
        setname(names[ran])
  
}
    // function namee(){
    //   return console.log(" hii musraf") 
    // }

// const clickon =(e)=>{
//     console.log(e.target.innerText)
// }
// const clickon1 =(name)=>{
//     console.log(`thankyou ${name}`)
// }
// const click2 =(name)=>{
//     console.log("thankyou musraf") 
// }
//   const [count,setCount] = useState(0) //epome array return panum
//   // const [name,setName] = useState({count:99,text:"like"}) 

//   function increment(){
//     setCount(count+1)
   
     
//   }
//   function decrement(){
//     setCount(count-1)
   
    
//   }
  return (
    <main>
   {/* <p onDoubleClick={()=>click2()}>i am {handNAmeChange()}</p>
   {/* <button onClick={(e)=>clickon(e)}> subscribe</button> */}
   {/* <button onClick={()=>clickon1('bala')}> subscribe</button> */}
   <p> i am {names}</p>
   <button onClick={()=>change()}> change </button>

   {/* <button onClick={decrement}>-</button>
   <span>{count}</span>
   <button onClick={increment}>+</button> */}
   </main>
  )
}

export default Content
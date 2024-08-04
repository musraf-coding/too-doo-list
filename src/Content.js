
import Itemslist from "./Itemslist.js"





const Content = ({items,handleCheck,delet}) => {

   
// const number=[-2,-1,1,3,5];
// const itemss =number.filter(n=> n>0)
// const itemse = number.filter(n=> n>0).map(n=>({number:n}))
//  console.log(itemss)
// console.log(itemse)
  return (
    <>
      {(items.length)?(

        <Itemslist
              items={items}
              key={items.id}
             handleCheck={handleCheck}
             delet={delet}/>
            ):(<h1 style={{color:"red"}}>YOUR LIST IS EMPTY</h1>)}
      
       
    </>
  )
}

export default Content
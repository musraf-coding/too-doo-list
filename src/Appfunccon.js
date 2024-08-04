
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useState,useEffect } from 'react'
import Additem from './Additem';
import Search from './Search';
import apiRequet from './Api.Request';



function App() {
  const API_URL ="http://localhost:3500/items";

  const [error,setRrror] = useState(null);
  const [isloading,setIsloading]=useState(true)
  const [items,setItems]=useState([]);
  const [newitem,setNewItem]= useState('')
  const [search,setSearch] =useState('')
     
    const addItem =async(item)=>{
      const id = items.length? (items.length)+1:1;
      const newitem={id,
        checked:false,
        item
      }
      const listitems=[...items, newitem]
      setItems(listitems)

  const postoptions ={
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newitem)
  }

  const result = await apiRequet(API_URL,postoptions)
  if(result) setRrror(result)
    }

 useEffect(()=>{
      const fetchItems = async()=>{
        try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("data not found");
          console.log(response)
          const listitems = await response.json();
          console.log(listitems)
          setItems(listitems);
          setRrror(null)
          
        }
        catch(err){
          setRrror(err.message)
        }
        finally{
          setIsloading(false)
        }
      }
      setTimeout(()=>{
        (async ()=> await fetchItems()) ()
       },2000)
      
 },[])
 
    const handleCheck = async(id)=>{
       const listitem =items.map((item)=>item.id===id? {...item,checked:!item.checked}:item)  
       setItems(listitem)

       const myitem = listitem.filter(item=>item.id===id)

       const updateoptions ={
        method:"PATCH",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({checked:myitem[0].checked})
      }

    const requrl =`${API_URL}/${id}`
      const result = await apiRequet(requrl,updateoptions)
      if(result) setRrror(result)
        
    }


    const delet = async(id)=>{
      const listitem =items.filter((item)=>item.id!==id)
      setItems(listitem)

      const deleteoptions ={
        method:"DELETE"
      }

      const requrl =`${API_URL}/${id}`
      const result = await apiRequet(requrl,deleteoptions)
      if(result) setRrror(result)

    }


    const handleAdd=(e)=>{
        e.preventDefault()
        console.log("submited")  

        setNewItem("");//input box empty aganum
        console.log(newitem)
        //add item
        addItem(newitem);
    }
      

return(
    
    <div className='App'>
     <Header tittle="Course list"/>
     <Additem 
            newitem={newitem}
            setNewItem={setNewItem}
            handleAdd={handleAdd}
     />
     <Search search={search}
              setSearch={setSearch}/>
    <main>
      {isloading && <p>loading items...</p>}
      {error && <p>{`Error:${error}`}</p>}
    {!isloading && !error &&<Content items={items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase()))}
             handleCheck={handleCheck}
             delet={delet}
    />}
    </main>
     <Footer lenght={items.length}/>
    </div>
    
);  

}

export default App;

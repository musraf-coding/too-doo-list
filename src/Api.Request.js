const apiRequet = async(url =" ",optionsObj = null, errmsg =null)=>{

    try{

        const resPonse =  await fetch(url,optionsObj)
        if(!resPonse.ok) throw Error("Please reload the app")
    }
    catch (err){
        errmsg =err.Message
    }
    finally{
        return errmsg
    }
}

export default apiRequet
let GetData = ()=>{
    let getLocal = localStorage.getItem('arra')  

    if(getLocal){
        let get = JSON.parse(getLocal)
        return get
    }else{
        return []
    }


}

let SetLocal = (id) =>{
    let getStorag = GetData()

    if(getStorag.includes(id)){
        alert('aa')
    }else{
          getStorag.push(id)
         
         localStorage.setItem('arra' , JSON.stringify(getStorag))
        
    }



}


let dleteFunGet = (id)=>{
    let getStorag = GetData()

    let newDlt = getStorag.filter(getID => getID !== id)
    
     localStorage.setItem("arra" , JSON.stringify(newDlt))
   
}

export {GetData , SetLocal ,dleteFunGet}


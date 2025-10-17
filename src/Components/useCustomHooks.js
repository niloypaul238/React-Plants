let getData = ()=>{

    let getLocal = localStorage.getItem('arra') || []

    return getLocal

}

let setLocal = (id) =>{
    let getStorage = JSON.parse(getData()) 

    if(getStorage.includes(id)){
        alert('a')
    }else{
        let store = [...getStorage,id]
        localStorage.setItem('arra' , JSON.stringify(store))
    }

}

export {getData , setLocal}


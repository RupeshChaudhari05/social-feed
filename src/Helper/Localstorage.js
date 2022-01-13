

export const getLocalItems=()=>{

  let list = localStorage.getItem("feed");
  if(list){
    return JSON.parse(localStorage.getItem("feed"));
  }else{
    return []
  }


}
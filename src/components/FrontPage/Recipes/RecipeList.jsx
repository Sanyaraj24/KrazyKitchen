const queryStrings={
    app_id : '0b63114e',
    app_key : 'f50710039ad863a4d9fecc8d4605657e'
}


export const fetchData=async(defaultQuery)=>{
    const {app_id,app_key}=queryStrings;
    //made storage
    const searchStorage=localStorage.getItem("MY_search");
    if(!searchStorage){
     try{
        const data=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response=await data.json();
       
  //store response in key-value pair
        localStorage.setItem('My_search',JSON.stringify({
            search: response
        }));
        return response;
    }
    catch(e){
        console.log('something went wrong')
        return e
    }
}
else{
    const data=JSON.parse(searchStorage);
    return data.search;

}
}
{/** 
export const fetchTabData=async(defaultQuery)=>{
    const {app_id,app_key}=queryStrings;
    try{
        const data=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response=await data.json();
        return response;
    }
    catch(e){
        console.log('something went wrong')
        return e
    }
}
*/}
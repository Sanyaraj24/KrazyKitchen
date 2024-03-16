import React from 'react'
//import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState,useEffect } from 'react';
import { fetchData } from './FrontPage/Recipes/RecipeList';

import Cards from './FrontPage/MyCards/Cards';
import searchrecipe from './FrontPage/Recipes/searchrecipe.png';


function Searchbox() {
  const [ SearchedTerm, setSearchedTerm] = useState('');
  const [query,setQuery]=useState('pizza');
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  
  useEffect(()=>{
    fetchData(query).then((response)=>{
      setData(response);
      
    })
  },[query]);
  
  
    
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
     
      }
    
      const handleOnHover = (result) => {
       
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        
  
      }
    
      const handleOnFocus = () => {
        
      }
    
      const formatResult = (item) => (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>
            name: {item.recipe.label}
            </span>
          </>
      );
       
     const searchRecipe=()=>{
      setLoading(true);
      fetchData(SearchedTerm).then((response)=>{
        setData(response)
        
      })
     }
  return (
    <>
    <br></br>
    <br></br>
    
    <div className="App">
      <header className="App-header">
       
         {/**
           <ReactSearchAutocomplete
          
            
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />*/} 
        <div className='search-bar' style={{backgroundImage:`url(${searchrecipe})`, height:"270px"}}>
          <input 
            onChange={(e)=>setSearchedTerm(e.target.value)}
            value={SearchedTerm}
            type='text'
            placeholder='  Search a recipe '
            className='input-box w-2/4 h-11 ml-60 mt-32 mr-5 rounded-sm'></input>

        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="submit" onClick={()=>searchRecipe(SearchedTerm)}>
                    Search
                </button>
                </div>
      </header>
    </div>
     {/** CARDSSSSSSS */}

     <div className='myCards flex-wrap gap-4'  style={{display:'flex',marginLeft:"110px" }}>
    {data && data.hits.map((item, index)=>{
      
      return (
        <>
        
        <Cards key={index} item={item} />
        
        </>
    )})
    }
    </div>
    
    </>
  );
 
}
export default Searchbox

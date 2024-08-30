import { useState, useEffect } from 'react';
import { fetchData } from './RecipeList';
import Cards from '../MyCards/Cards';

function Searchbox() {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [query, setQuery] = useState('pizza');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData(query)
      .then((response) => setData(response))
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, [query]);

  const searchRecipe = () => {
    if (searchedTerm.trim() !== '') {
      setQuery(searchedTerm); // Update the query state to trigger useEffect
    }
  };

  return (
    <>
      <div className="App">
        <header className="relative">
          <div
            className="search-bar bg-cover bg-center h-[450px] w-full flex items-center justify-center text-center"
            style={{
              backgroundImage: `url(/searchrecipe.png)`, 
  
            }}
          >
            <div className="flex flex-col items-center w-full px-2 md:px-8">
              <input
                onChange={(e) => setSearchedTerm(e.target.value)}
                value={searchedTerm}
                type="text"
                placeholder="Search a recipe"
                className="w-full md:w-2/3 lg:w-1/2 h-12 px-4 py-2 rounded-lg shadow-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-8"
              />
              <button
                className="mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded text-lg"
                type="button"
                onClick={searchRecipe}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Search'}
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className="myCards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12  p-16">
        {data &&
          data.hits.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
      </div>
    </>
  );
}

export default Searchbox;

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
      setQuery(searchedTerm);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchRecipe();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section - Keeping your original background */}
      <div className="relative">
        <div
          className="search-bar bg-cover bg-center h-[300px] md:h-[350px] w-full flex items-center justify-center"
          style={{ backgroundImage: `url(/searchrecipe.png)` }}
        >
          <div className="absolute inset-0  "></div>
          <div className="relative z-10 w-full px-4 md:px-10">
            <div className="flex flex-col items-center w-full">
              <input
                onChange={(e) => setSearchedTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                value={searchedTerm}
                type="text"
                placeholder="Search a recipe"
                className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-12 px-4 py-2 rounded-lg shadow-md text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="mt-6 md:mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded text-base md:text-lg transition duration-200"
                type="button"
                onClick={searchRecipe}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Searching...
                  </span>
                ) : (
                  'Search'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section - Updated to match details page cards */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        {data ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-center">
              {query.charAt(0).toUpperCase() + query.slice(1)} Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {data.hits.map((item, index) => (
                <div key={index} className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                  <Cards item={item} />
                </div>
              ))}
            </div>
          </>
        ) : loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-gray-500 text-lg">Loading recipes...</div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No recipes found. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbox;
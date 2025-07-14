const queryStrings = {
  app_id: '0b63114e',
  app_key: 'f50710039ad863a4d9fecc8d4605657e'
};

export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;
  const storageKey = `MY_search_${defaultQuery}`;
  const expirationTime = 1000 * 60 * 60; // 1 hour

  // Clean up expired items
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && key.startsWith('MY_search_')) {
      try {
        const item = JSON.parse(localStorage.getItem(key));
        if (item.timestamp && Date.now() - item.timestamp > expirationTime) {
          localStorage.removeItem(key);
        }
      } catch {
        localStorage.removeItem(key);
      }
    }
  }

  const searchStorage = localStorage.getItem(storageKey);

  if (!searchStorage) {
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      // Store only lightweight data
      const minimalData = data.hits.map(hit => ({
        uri: hit.recipe.uri,
        label: hit.recipe.label,
        cuisineType: hit.recipe.cuisineType,
        mealType: hit.recipe.mealType,
        dishType: hit.recipe.dishType,
        dietLabels: hit.recipe.dietLabels,
        healthLabels: hit.recipe.healthLabels
        // image is excluded to prevent caching signed URLs
      }));

      localStorage.setItem(storageKey, JSON.stringify({
        data: minimalData,
        timestamp: Date.now()
      }));

      // Return full data (not minimal) for image use
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  } else {
    try {
      //const cached = JSON.parse(searchStorage);

      // Fetch fresh for image
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
      const freshData = await response.json();
      return freshData;
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      return null;
    }
  }
};

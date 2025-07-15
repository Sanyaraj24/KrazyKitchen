const queryStrings = {
  app_id: '0b63114e',
  app_key: 'f50710039ad863a4d9fecc8d4605657e'
};

export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;
  const storageKey = `MY_search_${defaultQuery}`;
  const expirationTime = 1000 * 60 * 60; // 1 hour

  // Clean up expired items with better error handling
  const cleanExpiredCache = () => {
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith('MY_search_')) {
          const item = localStorage.getItem(key);
          if (item) {
            try {
              const parsed = JSON.parse(item);
              if (parsed.timestamp && Date.now() - parsed.timestamp > expirationTime) {
                localStorage.removeItem(key);
              }
            } catch (e) {
              localStorage.removeItem(key);
            }
          }
        }
      }
    } catch (error) {
      console.error('Cache cleanup error:', error);
    }
  };

  cleanExpiredCache();

  try {
    const searchStorage = localStorage.getItem(storageKey);
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(defaultQuery)}&app_id=${app_id}&app_key=${app_key}`;

    // Always try to fetch fresh data first
    const fetchFreshData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
      } catch (error) {
        console.error('API fetch error:', error);
        return null;
      }
    };

    const freshData = await fetchFreshData();

    if (freshData) {
      // Cache the data in background without blocking
      setTimeout(() => {
        try {
          const minimalData = freshData.hits.map(hit => ({
            uri: hit.recipe.uri,
            label: hit.recipe.label,
            cuisineType: hit.recipe.cuisineType,
            mealType: hit.recipe.mealType,
            dishType: hit.recipe.dishType,
            dietLabels: hit.recipe.dietLabels,
            healthLabels: hit.recipe.healthLabels
          }));

          localStorage.setItem(storageKey, JSON.stringify({
            data: minimalData,
            timestamp: Date.now()
          }));
        } catch (e) {
          console.error('Caching failed:', e);
        }
      }, 0);

      return freshData;
    }

    // Fallback to cache if fresh data couldn't be fetched
    if (searchStorage) {
      try {
        const cached = JSON.parse(searchStorage);
        if (cached?.data) {
          console.warn('Serving cached data due to API failure');
          return { hits: cached.data.map(item => ({ recipe: item })) };
        }
      } catch (e) {
        console.error('Cache parse error:', e);
      }
    }

    return null;

  } catch (error) {
    console.error('Unexpected error in fetchData:', error);
    return null;
  }
};
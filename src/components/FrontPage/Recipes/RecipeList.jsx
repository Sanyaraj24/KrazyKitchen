const queryStrings = {
    app_id: '0b63114e',
    app_key: 'f50710039ad863a4d9fecc8d4605657e'
};

export const fetchData = async (defaultQuery) => {
    
    const { app_id, app_key } = queryStrings;
    const storageKey = 'search_';
    const searchStorage = localStorage.getItem(storageKey);

    if (!searchStorage) {
        try {
            console.log("hellokdmskld");
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Store response in localStorage
            localStorage.setItem(storageKey, JSON.stringify( data)
            );

            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    } else {
        try {
            const data = JSON.parse(searchStorage);
            return data;
        } catch (error) {
            console.error('Error parsing localStorage data:', error);
            // If parsing fails, fetch fresh data
            try {
                const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Store response in localStorage
                localStorage.setItem(storageKey, JSON.stringify( data)
                );

                return data;
            } catch (error) {
                console.error('Error fetching data:', error);
                return null;
            }
        }
    }
};

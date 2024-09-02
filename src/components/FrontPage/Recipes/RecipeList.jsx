const queryStrings = {
    app_id: '0b63114e',
    app_key: 'f50710039ad863a4d9fecc8d4605657e'
};

export const fetchData = async (defaultQuery) => {
    
    const { app_id, app_key } = queryStrings;
    const storageKey = `MY_search_${defaultQuery}`;
    const expirationTime = 1000 * 60 * 60 * 24; // 24 hours in milliseconds
    //IF MY LOCAL STORAGE GETS FULL
    for (let i = localStorage.length-1;i>=0; i--) {
        const key = localStorage.key(i);
        if(key && key.startsWith('MY_search_')){
            try{
                const item = JSON.parse(localStorage.getItem(key));
        
                if (item.timestamp && Date.now() - item.timestamp > expirationTime) {
            localStorage.removeItem(key);
             }
            }catch(error){
                console.log('error');
                localStorage.removeItem(key);
            }
        }
    }
    const searchStorage = localStorage.getItem(storageKey);

    if (!searchStorage) {
        try {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Store response in localStorage
            localStorage.setItem(storageKey, JSON.stringify( data));

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
            console.error('Error parsing localStorage data:',error);
            // If parsing fails, fetch fresh data
            return null;
        }
    }
};

const BASE_URL = "http://localhost:5500/bots"
export async function fetchBots (){
    

    try {
        let response = await fetch (BASE_URL)
    let data = await response.json()
    return data;
        
    } catch (error) {
        console.error(error);
    }

}


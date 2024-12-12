const getPsgcCities = async (regionCode) => {

    try {
        // Fetch cities/municipalities
        const citiesResponse = await fetch(`https://psgc.gitlab.io/api/regions/${regionCode}/cities-municipalities.json`, {
            headers: { 'Content-Type': 'application/json'}
        })
        if (!citiesResponse.ok) throw new Error('Failed to fetch cities/municipalities')
        
        const citiesArray = await citiesResponse.json()

        return citiesArray
    } catch (error) {
        console.error('Error in getPcsgCities:', error)
        return []
    }
}

export default getPsgcCities
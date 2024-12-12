const getPsgcRegions = async () => {
    
    try {
        // Fetch regions
        const regionsResponse = await fetch('https://psgc.gitlab.io/api/regions.json', {
            headers: { 'Content-Type': 'application/json' }
        })

        if (!regionsResponse.ok) throw new Error ('Failed to fetch regions')

        const regionsArray = await regionsResponse.json()
        return regionsArray
    } catch (error) {
        console.error('Error in getPsgcRegions:', error)
        return []
    }
}

export default getPsgcRegions
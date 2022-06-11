const getDataFromApi =  async ( searchKey = 'egypt' ) => {
    let allDataApi;
    let location = window.location.pathname;
    let locationWithoutSlash = location.slice(1,location.length);

    const options = {
        method: 'GET',
        headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Key': '6e3836162bmshd9b4a57812be968p10f6bdjsnafc08b0ef4af',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
    }

    let response = await fetch(`https://google-search3.p.rapidapi.com/api/v1/${locationWithoutSlash === 'all' ? 'search' : locationWithoutSlash}/q=${searchKey}&num=20 ${locationWithoutSlash === 'video' ? 'videos' : ''}`, options);
    let data = await response.json();

    switch (location) {
        case "/image":
            allDataApi = data.image_results;
            break;
        case "/news":
            allDataApi = data.entries;
            break;
        default:
            allDataApi = data.results;
            break;
        }
    return allDataApi;
}

export default getDataFromApi;

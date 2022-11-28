//Fetch Youtube Data using Api Key

export function fetchData(searchBox) {
  // const key = `&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchBox}&maxResults=15&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
                .then((res) => res.json())
}
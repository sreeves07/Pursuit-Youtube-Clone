//Fetch Youtube Data using Api Key

export function fetchData(searchBox) {
  const key = `&key=${process.env.REACT_APP_YOUTUBE_KEY}`
  console.log("searchbox = ",searchBox)
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchBox}&maxResults=15${key}`)
                .then((res) => res.json())
}
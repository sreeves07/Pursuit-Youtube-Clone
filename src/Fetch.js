//Fetch Youtube Data using Api Key

const URL = "https://www.googleapis.com/youtube/v3/search"


export function fetchData(searchBox) {
  const key = `&key=${process.env.REACT_APP_YOUTUBE_KEY}`
  // const searchEndpoint = "?part=snippet&maxResults=10" 
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchBox}&regionCode=US&maxResults=10${key}`)
                .then((res) => res.json())
                .then((res) => {console.log(res)})
                .catch((err) => {console.log(err)});
}
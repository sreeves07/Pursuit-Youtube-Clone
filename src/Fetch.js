//Fetch Youtube Data using Api Key

const URL = "https://www.googleapis.com/youtube/v3/search"
const apiKey = 'AIzaSyDx90ePhNNl7CvTYvkwavcNvtlvca8z-2s'

export function fetchData(searchBox) {
  const key = `&key=${apiKey}`
  const searchEndpoint = "?part=snippet&maxResults=10" 
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchBox}&maxResults=10${key}`)
                .then((res) => res.json())
                .then((res) => {console.log(res)})
                .catch((err) => {console.log(err)});
}
;
//Fetch Youtube Data using Api Key

const URL = "https://www.googleapis.com/youtube/v3/"
const key = `&key=${process.env.REACT_APP_API_KEY}`

export function fetchData() {
    return fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${key}`
      );
}
;
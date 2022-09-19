

const API_KEY = '19f84e11932abbc79e6d83f82d6d1045'
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
}
// Call the main functions the page is loaded
window.onload = () => {
    getBanner()
    getOriginals()
    getTrendingNow()
    getTopRated()
    getActionMovies()
    getComedyMovies()
    getHorrorMovies()
    getThrillerMovies()
  }
  
  // ** Helper function that makes dynamic API calls **
//   
  function fetchMovies(url,dom_element, path_type) {
    // Use Fetch with the url passed down 
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Something Went wrong!!!')
        }
    }).then(data => {
        // console.log(data)
        showMovies(data,dom_element,path_type)
    })
    .catch(err => {
        console.error(err)
    })
    // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
  }
  //  ** Function that displays the movies to the DOM **
  showMovies = (movies, dom_element, path_type) => {
    
    // Create a variable that grabs id or class
    let movieSection = document.querySelector(dom_element)
  
    // Loop through object
    for(let movie of movies.results){
        // console.log(movie)
        // Within loop create an img element
        let imageElement = document.createElement('img')
        // Set attribute
        imageElement.setAttribute('data-id',movie.id)
        imageElement.setAttribute('class','poster-image')
      // Set source
        imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
      // Append the imageElement to the dom_element selected
        movieSection.appendChild(imageElement)
    }    
  
    }
  

 //Function that fetches banner
 const getBanner = () => {
    let url = 
    `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json()
        } else{
            throw new Error('Something went wrong while fetching banner!')
        }
    })
    .then(data => {
        const movie = data.results[Math.floor(Math.random()*data.results.length)]
    const movieTitle = document.getElementById('banner-title')
    movieTitle.innerText = movie.original_name
    const movieDesc = document.querySelector('.featured__description')
    movieDesc.innerText = movie.overview
    const banner = document.querySelector('.featured')
    banner.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
    })
    .catch(err => console.error(err))
 }
 
  // ** Function that fetches Netflix Originals **
  const getOriginals = () => {
    let url = 
    `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
    fetchMovies(url,'.original__movies','poster_path')
  }
  // ** Function that fetches Trending Movies **
  const getTrendingNow = () => {
    let url = 
    `https://api.themoviedb.org/3${requests.fetchTrending}`
    fetchMovies(url,'#trending','backdrop_path')
  }
  // ** Function that fetches Top Rated Movies **
  const getTopRated = () => {
    let url = 
    `https://api.themoviedb.org/3${requests.fetchTopRated}`
    fetchMovies(url,'#top_rated','backdrop_path')
  }
  // ** Function that fetches Action Movies **
  const getActionMovies = () =>{
    let url = 
    `https://api.themoviedb.org/3${requests.fetchActionMovies}`
    fetchMovies(url,'#action_movies','poster_path')
  }
  // ** Function that fetches Comedy Movies **
  const getComedyMovies = () =>{
    let url = 
    `https://api.themoviedb.org/3${requests.fetchComedyMovies}`
    fetchMovies(url,'#comedy_movies','backdrop_path')
  }
  // ** Function that fetches Horror Movies **
  const getHorrorMovies = () =>{
    let url = 
    `https://api.themoviedb.org/3${requests.fetchHorrorMovies}`
    fetchMovies(url,'#horror_movies','backdrop_path')
  }
  // ** Function that fetches Romance Movies **
  const getThrillerMovies = () =>{
    let url = 
    `https://api.themoviedb.org/3${requests.fetchThrillerMovies}`
    fetchMovies(url,'#thriller_movies','poster_path')
  }
  

  
  
  
  
  
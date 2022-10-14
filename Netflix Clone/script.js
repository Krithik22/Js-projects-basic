

// const API_KEY = '19f84e11932abbc79e6d83f82d6d1045'
const API_KEY = 'dd5c4fce85743afa613dde6e95b26592'

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
        imageElement.setAttribute('onclick',`handleClick(${movie.id})`)
        // movie.addEventListener('click',() => {getMovieTrailer(movie.id)})
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
  
const navBar = document.querySelector('header') 
window.addEventListener('scroll',() => {
  if(window.scrollY > 100){
    navBar.classList.add('nav-bar')
  } else{
    navBar.classList.remove('nav-bar')
  }
})

// ** Fetches URL provided and returns response.json()
async function getMovieTrailer(id) {
  //URL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  try{
    const response = await fetch(trailerUrl)
    const videoData = await response.json()
    // const movieArr = videoData.results
    // console.log(movieArr)
    // console.log(videoData.results.length)
    console.log(videoData.results)
    return videoData.results
  } catch(err){
    console.error(err)
  }
}


// ** Function that adds movie data to the DOM
const setTrailer = trailers => {
  // Set up iframe variable to hold id of the movieTrailer Element
  const iframe = document.querySelector('.movieTrailer')
  // Set up variable to select .movieNotFound element
  const movieNotFound = document.querySelector('.movieNotFound')
// If there is a trailer add the src for it
  if (trailers.length > 0) {
    // add d-none class to movieNotFound and remove it from iframe
    movieNotFound.classList.add('d-none')
    iframe.classList.remove('d-none')
    const movieId = trailers[0].key
    console.log(trailers[0].key)
    const trailerUrl = `https://www.youtube.com/embed/${movieId}?autoplay=1`
    iframe.setAttribute('src',trailerUrl)
    // add youtube link with trailers key to iframe.src
  } else {
    // Else remove d-none class to movieNotfound and ADD it to iframe
    console.log(trailers.length)
    console.log('else block')
    iframe.classList.add('d-none')
    movieNotFound.classList.remove('d-none')
  }
  $('#trailerModal').modal('show')
}

const handleClick = async (id) => {
  const movieId = await getMovieTrailer(id)
  setTrailer(movieId)
}
 
  
const apiKey = '1722712481423675'
const searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')

const getHero = (name) => {
    fetch(`https://superheroapi.com/api.php/1722712481423675/245`)
    .then(response => response.json())
    .then(json => console.log(json))
}

searchButton.onclick = () => {
    const heroName = searchBar.value
    getHero(heroName)
    // searchBar.value = ''
}
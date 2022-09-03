const apiKey = '1722712481423675'
const searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')

const heroImage = document.getElementById('heroImage')

const getHero = (heroName) => {
    fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/${heroName}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        console.log(json.results[0].image.url)
        heroImage.setAttribute('src',json.results[0].image.url)
    })
}

searchButton.onclick = () => {
    const heroName = searchBar.value
    getHero(heroName)
    searchBar.value = ''
}
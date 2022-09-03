const apiKey = '1722712481423675'
const searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')
const getRandomHero = document.getElementById('randomHero')

const heroImage = document.getElementById('heroImage')
const hero = document.getElementById('heroName')
const appearance = document.getElementById('appearance')
const power = document.getElementById('powerStats')

const getHeroImage = (json) => {
    heroImage.setAttribute('src',json.results[0].image.url)
    // heroImage.style.display='block'
}

const heroAppearance = (json) => {
    const result = json.results[0].appearance
    // console.log(result)
    appearance.innerHTML = `
        <h3>Appearance</h3>
        <p><strong>Gender: </strong>${result.gender}<br>
            <strong>Height: </strong>${result.height[1]}<br>
            <strong>Weight: </strong>${result.weight[1]}<br>
        </p>
    `
}

const powerStats = (json) => {
    const result = json.results[0].powerstats
    console.log(result)
    power.innerHTML = `
        <h3>Powers</h3>
        <p>
            <strong>Combat: </strong>${result.combat}<br>
            <strong>Durability: </strong>${result.durability}<br>
            <strong>Intelligence: </strong>${result.intelligence}<br>
            <strong>Power: </strong>${result.power}
            <strong>Strength: </strong>${result.strength}<br>
            <strong>Speed: </strong>${result.speed}<br>
        </p>
    `
}

const displayHero = (json) => {
    getHeroImage(json)
    heroAppearance(json)
    powerStats(json)
    document.querySelector('.container').style.display = 'block'
}

const getHero = (heroName) => {
    fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/${heroName}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        hero.innerHTML = `<strong>${json.results[0].name}</strong>`
        displayHero(json)
    })
}

const randomHero = (randomNumber) => {
    fetch(`https://www.superheroapi.com/api.php/${apiKey}/${randomNumber}`)
    .then(response => response.json())
    .then(json => {
        // hero.innerHTML = `<strong>${json.results[0].name}</strong>`
        // displayHero(json)
        console.log(json)
    })
    
}

searchButton.onclick = () => {
    const heroName = searchBar.value
    getHero(heroName)
    searchBar.value = ''
}

getRandomHero.onclick = () => {
    const randomNumber = Math.floor(Math.random() * 731)
    randomHero(randomNumber)
}
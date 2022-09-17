const promise = new Promise((resolve,reject) => {
    isReal = [true,false][Math.floor(Math.random() * 2)]
    setTimeout(() => {
        isReal ? resolve('🍲Soup is Ready') : reject('❌No soup today')
    },2000)
})

promise.then(success => console.log({success}))
        .catch(error => console.error({error}))


const getSoup = async () => {
    try{
        const soup = await promise
        console.log(soup)        
    } catch(error) {
        console.error(error)
    }

}
console.log(getSoup())
// const promise = new Promise((resolve,reject) => {
//     isReal = [true,false][Math.floor(Math.random() * 2)]
//     setTimeout(() => {
//         isReal ? resolve('🍲Soup is Ready') : reject('❌No soup today')
//     },2000)
// })

// promise.then(success => console.log({success}))
//         .catch(error => console.error({error}))


// const getSoup = async () => {
//     try{
//         const soup = await promise
//         console.log(soup)        
//     } catch(error) {
//         console.error(error)
//     }

// }
// console.log(getSoup())

const soupPromise = new Promise((resolve,reject) => {
    const isSoup = [true,false][Math.floor(Math.random()*2)]
    setTimeout(() => {
        isSoup ? resolve("🍲Soup is ready"):reject('❌No soup today')
    },2000)
})

const getSoup = async () => {
    let data = {
        tip: 0,
        rating: 0,
        pay: 0
    }
    try{
        const soup = await soupPromise
        console.log(soup)
        data.tip = 0.2
        data.rating = 5
        data.pay = 10    
    }catch(err){
        console.log(err)
        data.tip = 0
        data.rating = 1
        data.pay = 5
    }
    return data
}
// console.log(getSoup().then(val => console.log(val)))

const sum = async (a,b) => a+b
console.log(sum(1,5))
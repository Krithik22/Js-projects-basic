isReal = false
const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        isReal ? resolve('🍲Soup is Ready') : reject('❌No soup today')
    },2000)
})

promise.then(success => console.log({success}))
        .catch(error => console.error({error}))
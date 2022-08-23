const freqCount = (word) => {
    let freq = {}
    for(letter of word){
        if(letter in freq){
            freq[letter] +=1
        } else{
            freq[letter] = 1
        }
    }
    return freq
}
// console.log(freqCount('haha'))

const wordCount = (sentence) => {
    wordArr = sentence.split(" ")
    return freqCount(wordArr)
}

// console.log(wordCount("hello im krithik hello krithik hiiii"))

// Map - Loops through and returns an array
const doubleMap = (numbers) => {
    return numbers.map(number => number * 2)
}
// console.log(doubleMap([1,2,3,4]))

const filter = (numbers,greaterThan) => {
    let result = []
    numbers.map(number => {
        if(number > greaterThan){
            result.push(number)
        }
    })
    return result
}

// console.log(filter([1,2,3,4,5,6],2))

// Filter - loops thr' and returns an array with the given condition
arr = [1,2,3,4,5,6]
let arr1 = arr.filter(number => number > 2)
// console.log(arr1)

const mul = (a,b) => {
    return a * b
}

// Reduce  - reduce loops and gives you back the accumulator 
// reduce(function,start no of acc)
let nums = [1,2,3,4]
const result = nums.reduce(mul)
// console.log(result)

const btns = document.querySelectorAll(".btn")

let timesClicked = {
    red: 0,
    green: 0,
    yellow: 0
}
btns.forEach(btn => {
    btn.onclick = () => {
        // console.log(btn.getAttribute("value"))
        timesClicked[btn.value] += 1
        // console.log(timesClicked[btn.value])
        btn.innerText = timesClicked[btn.value]
    }
})

const clear = () => {
    timesClicked.red = 0
    timesClicked.green = 0
    timesClicked.yellow = 0
    btns.forEach(btn => {
        btn.innerText = ''
    })   
}

const clr = document.getElementById('clr')
clr.onclick = () => clear()

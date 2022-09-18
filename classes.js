class car{
    constructor(name,color,topSpeed){
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0
    }
    getCurrentSpeed(){
        return this.currentSpeed
    }
// it adds a given default value if an argument is not given
    drive(speed=10){
        this.currentSpeed += speed
        console.log(`Driving at ${this.currentSpeed}mph`)
    }
    brake(){
        this.currentSpeed -= 10
        console.log('Brake!!!!')
    }

    zeroToSixty(){
        setTimeout(()=>{
            console.log('phew! That was fast')
            this.currentSpeed = 60
            console.log(this.currentSpeed)
        },3000)
    }

    stop(){
        this.currentSpeed = 0
        console.log('Parked the car.')
    }
}

const swift = new car('Swift','Red',150)

console.log(swift.currentSpeed)
// swift.zeroToSixty()
console.log(swift.currentSpeed)

const porsche = new car('Porsche','yellow',250)
porsche.name
porsche.color
porsche.topSpeed
const nums = [1,2,3,4,5]
nums.forEach(()=>porsche.drive())
porsche.zeroToSixty()


// Every class is a object 
// you can add your own methods to array class/object by prototype

Array.prototype.myPush = function(item){
    this[this.length] = item
    return this
}

const fruits = ['a','b','c']
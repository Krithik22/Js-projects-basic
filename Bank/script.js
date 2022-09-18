// console.log(amount)
class Bank{
    constructor(balance){
        this.balance = balance
    }
    // getBalance(){
    //     return this.balance
    // }
    deposit(amount){
        this.balance += amount
        return this.balance
    }
    withdraw(amount){
        if(this.balance - amount <= 0){
            return "You don't have enough amount"
        }
        this.balance -= amount
        return this.balance
    }
}

const person1 = new Bank(100)
const amount = document.getElementById('amount')
const withdraw = document.getElementById('withdraw')
const deposit = document.getElementById('deposit')
const amountBalance = document.getElementById('balance')

withdraw.onclick = () => {
    const withdrawAmount = Number(amount.value)
    console.log(withdrawAmount)
    person1.withdraw(withdrawAmount)
    amountBalance.innerHTML = `Balance: ${person1.balance}`
}
deposit.onclick = () => {
    const depositAmount = Number(amount.value)
    person1.deposit(depositAmount)
    amountBalance.innerHTML = `Balance: ${person1.balance}`
}

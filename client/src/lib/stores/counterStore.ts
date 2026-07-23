import {makeAutoObservable} from 'mobx'

export default class CounterStore{
    title = 'Counter store'
    count = 0
    events: string[] = [
        `Initial Count is ${this.count}`
    ]

    constructor(){
        makeAutoObservable(this)
    }

    increment = (amount = 1) => {
        this.count += amount
        this.events.push(`Incremented by ${amount} - count now is ${this.count}`)
    }

    decrement = (amount = 1) => {
        this.count -= amount
        this.events.push(`Decremented by ${amount} - count now is ${this.count}`)
    }

    get eventCount() {
        return this.events.length
    }
}
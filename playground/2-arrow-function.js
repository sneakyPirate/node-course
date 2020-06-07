//const square = (x) => x*x
// const square = (x=>x*x)
// console.log(square(7))

const event ={
    name: 'Birthday Party',
    guestList: ['Andrew','Jen','Mike'],
    printGuestList() {
        console.log(this.name)
        this.guestList.forEach((guest) => {
            console.log(guest,this.name)
        })
    }
}
event.printGuestList()

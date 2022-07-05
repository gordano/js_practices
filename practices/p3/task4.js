const ticketWindow = {
    events: {},

    createEvent: function (eventName, ticketPrice) {
        this.events[eventName] = new Event(eventName, ticketPrice)
    },
    buyTicket: function (eventName) {
        return this.events[eventName].addTicket()
    },
    returnTicket: function (ticketID) {
        for (const event in this.events) {
            if (this.events[event].isEventTicket(ticketID)) {
                this.events[event].removeTicket(ticketID)
            }
        }
    },
    showEvents: function () {
        for (const event in this.events) {
            console.log(this.events[event])
        }
    }
}

const Event = function (eventName, ticketPrice) {
    this.name = eventName
    this.price = ticketPrice
    this.bank = 0
    this.tickets = []

    this.addTicket = function () {
        let ticketID = generateTicketID()
        this.bank += this.price
        this.tickets.push(ticketID)

        return ticketID
    }
    this.removeTicket = function (ticketID) {
        if (this.isEventTicket(ticketID)) {
            this.tickets.splice(
                this.tickets.indexOf(
                    this.findTicketByID(ticketID)
                ), 1)
            this.bank -= this.price

            return true
        } else {
            return false
        }
    }
    this.isEventTicket = function (ticketID) {
        return this.findTicketByID(ticketID)
    }
    this.findTicketByID = function (ticketID) {
        return this.tickets.find((t) => {
            return t === ticketID
        })
    }
    const generateTicketID = () => {
        return (Math.random() + 1).toString(36).substring(2, 8)
    }
}


ticketWindow.createEvent('Concert', 500)
ticketWindow.createEvent('StandUp', 1)

let id1 = ticketWindow.buyTicket('Concert')
let id2 = ticketWindow.buyTicket('Concert')
let id3 = ticketWindow.buyTicket('Concert')
let id4 = ticketWindow.buyTicket('StandUp')
let id5 = ticketWindow.buyTicket('StandUp')

// ticketWindow.showEvents()
ticketWindow.returnTicket(id2)
// ticketWindow.showEvents()




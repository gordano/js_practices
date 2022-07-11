const Shipyard = function () {
    this.isSameType = (ship, yard) => {
        return ship === yard
    }
    this.messages = {
        error: "Sorry we can't do this",
        exchange: "Here is your new ship",
        repaint: "Your ship is new color: ",
        repair: "Your ship has been repaired"
    }
    this.repaint = function (ship, color) {
        ship.color = color
        return console.log(this.messages.repaint + color)
    }
    this.repair = function (ship) {
        if (this.isSameType(ship.type, this.type)) {
            ship.broken = false
            return console.log(this.messages.repair)
        } else {
            return console.log(this.messages.error)
        }
    }
}

const SailShipyard = function () {
    Shipyard.call(this)
    this.type = 'sail'
    this.build = function (color, mats, sailsArea) {
        return new SailShip(color, mats, sailsArea)
    }
    this.exchange = function (oldShip) {
        if (this.isSameType(oldShip.type, this.type)) {
            let newShip = this.build(oldShip.color, oldShip.mats, oldShip.sailsArea)
            Object.assign(oldShip, newShip)
            return console.log(this.messages.exchange)
        } else {
            return console.log(this.messages.error)
        }
    }
}

const MotorShipyard = function () {
    Shipyard.call(this)
    this.type = 'motor'
    this.build = function (color, power, material) {
        return new MotorShip(color, power, material)
    }
    this.exchange = function (oldShip) {
        if (this.isSameType(oldShip.type, this.type)) {
            let newShip = this.build(oldShip.color, oldShip.power, oldShip.material)
            Object.assign(oldShip, newShip)
            return console.log(this.messages.exchange)
        } else {
            return console.log(this.messages.error)
        }
    }
}

const Ship = function (color) {
    this.color = color
    this.broken = false
    this.serial ||= (Math.random() + 1).toString(36).substring(2, 8)
}

const SailShip = function (color, mats, sailsArea) {
    Ship.call(this, color)
    this.type = 'sail'
    this.mats = mats
    this.sailsArea = sailsArea
}

const MotorShip = function (color, power, material) {
    Ship.call(this, color)
    this.type = 'motor'
    this.power = power
    this.material = material
}

const sailShipyard = new SailShipyard()
let sailboat = sailShipyard.build('black', 3, 80)

const motorShipyard = new MotorShipyard()
let motorboat = motorShipyard.build('red', 250, 'polycarbonate')

sailShipyard.repaint(sailboat, 'white')
console.log("Before exchange serial is: ", sailboat.serial)
sailShipyard.exchange(sailboat)
console.log("After exchange serial is: ", sailboat.serial)

motorboat.broken = true
sailShipyard.repair(motorboat)
sailShipyard.repaint(motorboat, 'white')
sailShipyard.exchange(motorboat)





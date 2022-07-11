const Shipyard = function () {
    this.repair = function (ship) {
        if (isSameType(ship.type, this.type)) {
            ship.broken = false
            return console.log(messages.repair)
        } else {
            return console.log(messages.error)
        }
    }
    this.repaint = function (ship, color) {
        ship.color = color
        return console.log(messages.repaint + color)
    }
    this.exchange = function (ship) {
        return isSameType(ship.type, this.type) ?
            console.log(messages.exchange) :
            console.log(messages.error)
    }

    let isSameType = (ship, yard) => {
        return ship === yard
    }

    let messages = {
        error: "Sorry we can't do this",
        exchange: "Here is your new ship",
        repaint: "Your ship is new color: ",
        repair: "Your ship has been repaired"
    }
}

const SailShipyard = function () {
    Shipyard.call(this)
    this.type = 'sail'
    this.build = function (color, mats, sailsArea) {
        return new SailShip(color, mats, sailsArea)
    }
}

const MotorShipyard = function () {
    Shipyard.call(this)
    this.type = 'motor'
    this.build = function (color, power, material) {
        return new MotorShip(color, power, material)
    }
}

const Ship = function (color) {
    this.color = color
    this.broken = false
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
const sailboat = sailShipyard.build('black', 3, 80)

const motorShipyard = new MotorShipyard()
const motorboat = motorShipyard.build('red', 250, 'polycarbonate')

sailShipyard.repair(sailboat)
sailShipyard.repaint(sailboat, 'white')
sailShipyard.exchange(sailboat)

sailShipyard.repair(motorboat)
sailShipyard.repaint(motorboat, 'white')
sailShipyard.exchange(motorboat)




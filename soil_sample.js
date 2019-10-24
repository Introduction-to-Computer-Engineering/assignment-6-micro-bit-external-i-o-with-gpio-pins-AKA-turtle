let moistureReading = 0
basic.forever(function () {
 
 pins.digitalWritePin(DigitalPin.P6, 1)
 moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 10, 750, 0, 4)
 basic.showNumber(Math.round(moistureReading))
 pins.digitalWritePin(DigitalPin.P6, 0)
 basic.pause(2000)
})

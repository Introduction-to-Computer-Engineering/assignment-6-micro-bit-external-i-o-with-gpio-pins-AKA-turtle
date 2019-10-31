// Dwight Rider 10/31/19
// Intro to CPE
//Soil moisture sensor for Microbit

let moistureReading = 0 //initializing variable
basic.forever(function () { //our sampling loop
 pins.digitalWritePin(DigitalPin.P6, 1) //turns power for sensor on
 moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 10, 750, 0, 4) //reads data from sensor and maps value ranges to 0 - 4
 basic.showNumber(Math.round(moistureReading)) //display moisture value
 pins.digitalWritePin(DigitalPin.P6, 0) //turns off sensor
 basic.pause(2000) //pauses before repeating the soil sampling
})

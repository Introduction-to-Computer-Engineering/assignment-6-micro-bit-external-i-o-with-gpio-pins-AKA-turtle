basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P6, 1)
    let sample: number = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(sample)
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(2000)
})

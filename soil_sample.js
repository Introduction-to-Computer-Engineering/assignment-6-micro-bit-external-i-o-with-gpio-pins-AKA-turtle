basic.forever(function () {
    let sample: number = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(sample)
    basic.pause(2000)
})

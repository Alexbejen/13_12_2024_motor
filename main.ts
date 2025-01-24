let srv = 0
basic.forever(function () {
    srv += 1
    pins.servoWritePin(AnalogPin.P1, srv)
    basic.pause(50)
})

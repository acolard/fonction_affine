basic.forever(function () {
    basic.showNumber(Math.round(0 * sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    ) + 0))
    control.waitMicros(1000000)
})

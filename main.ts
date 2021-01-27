let heading = 0
basic.forever(function () {
    if (input.compassHeading() < 45) {
        heading = 5
    } else if (input.compassHeading() < 180) {
        heading = 0
    } else if (input.compassHeading() < 225) {
        heading = 0
    } else if (input.compassHeading() < 315) {
        heading = 0
    } else {
        heading = 0
    }
    basic.showString("" + (heading))
})

input.onGesture(Gesture.Shake, function () {
	
})
let timer = 0
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 30) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
    if (timer == 20) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (timer == 10) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (timer == 10) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (input.lightLevel() > 10) {
        basic.showLeds(`
            . # # # .
            # . # . #
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (input.lightLevel() > 30) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            # # # # #
            # . # . #
            `)
    }
})

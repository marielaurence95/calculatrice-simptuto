/**
 * Blocs des opérations mathématiques
 */
input.onGesture(Gesture.Shake, function () {
    if (Opération == 1) {
        basic.showNumber(x + y)
    } else if (Opération == 2) {
        basic.showNumber(x - y)
    } else if (Opération == 3) {
        basic.showNumber(x * y)
    } else if (Opération == 4) {
        basic.showNumber(x / y)
    } else {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
})
let Opération = 0
let y = 0
let x = 0
x = 0
y = 0
Opération = 0
/**
 * Blocs pour définir les valeurs des variables
 */
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x += 1
        basic.showNumber(x)
    } else if (input.buttonIsPressed(Button.B)) {
        y += 1
        basic.showNumber(y)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        Opération += 1
        basic.showNumber(Opération)
    } else {
        basic.pause(100)
    }
})

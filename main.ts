input.onGesture(Gesture.EightG, function () {
    SendSOS()
})
function SendSOS () {
    radio.sendValue("SOS:" + id, 0)
}
input.onButtonPressed(Button.A, function () {
    if (isActive == false) {
        id += -1
        if (id < 1) {
            id = 0
        }
        basic.showNumber(id)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (isActive == false) {
        isActive = true
    } else {
        SendSOS()
    }
})
input.onButtonPressed(Button.B, function () {
    if (isActive == false) {
        id += 1
        basic.showNumber(id)
    }
})
let id = 0
let isActive = false
isActive = false
radio.setGroup(70)
id = 0
basic.showNumber(id)
basic.forever(function () {
    if (isActive == true) {
        basic.showString("ID" + id)
    }
})

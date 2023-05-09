input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    SGBotic.cali_UserLoad(85)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    OLED.writeStringNewLine(serial.readString())
})
let _var = 0
OLED.init(128, 64)
basic.clearScreen()
OLED.writeStringNewLine("Start weighing...")
OLED.newLine()
SGBotic.init_loadcell(
DigitalPin.P16,
DigitalPin.P1
)
SGBotic.loadCell_noLoad(
)
OLED.clear()
basic.forever(function () {
    _var = SGBotic.read_grams(
    )
    basic.showNumber(_var)
    OLED.writeStringNewLine("Weight: " + convertToText(_var))
    OLED.writeStringNewLine("")
    OLED.newLine()
    basic.pause(1000)
    OLED.clear()
})

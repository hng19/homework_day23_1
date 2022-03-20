// Truy cập vào các thành phần
const primaryNumberEl = document.getElementById("primary-number")
const secondaryNumberEl = document.getElementById("secondary-number")
const operatorEl = document.getElementById("operator")
const resultEl = document.getElementById("result")
const timeEl = document.querySelector(".time")
const scoreEl = document.querySelector(".score")

const operators = ["+", "-", "*"]
let total
let score = 0
let time = 10
let interval

function randomNumber() {
    // Random số và phép tính
    let primaryNumber = Math.floor(Math.random() * 10)
    let secondaryNumber = Math.floor(Math.random() * 10)
    let operator = operators[Math.floor(Math.random() * operators.length)]

    // Tính toán kết quả của biểu thức vừa random
    total = eval(`${primaryNumber} ${operator} ${secondaryNumber}`)

    // Hiển thị nội dung lên giao diện
    primaryNumberEl.innerText = primaryNumber
    secondaryNumberEl.innerText = secondaryNumber
    operatorEl.innerText = operator
}

//Chạy thời gian
function updateTime() {
    time--
    timeEl.innerText = time >= 10 ? `00:${time}` : `00:${time}`

    if (time == 0) {
        clearInterval(interval)
        //Thông báo kết quả
        console.log("kết quả : " + score)

        // disable ô input k cho nhập tiếp
        resultEl.disabled = true

        //Thông báo kết quả 
        alert("điểm của bạn là " + score)
    }

}

// Chạy khi bắt đầu game
function init() {
    // Random số
    randomNumber()

    // Set lại time và score
    // 00:03 - 00:10
    timeEl.innerText = time >= 10 ? `00:${time}` : `00:${time}`

    // 11-02
    scoreEl.innerText = score >= 10 ? score : `0${score}`

    // Chạy thời gian
    interval = setInterval(updateTime, 1000)
}

resultEl.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        let value = e.target.value
        console.log(value)
        if (value == total) {
            score++
            scoreEl.innerText = score >= 10 ? score : `0${score}`
            randomNumber()
        }
        resultEl.value = ""
    }
})

init()
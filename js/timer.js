
const daysBlock = document.querySelector(".timer__days")
const hoursBlock = document.querySelector(".timer__hours")
const minutesBlock = document.querySelector(".timer__minutes")
const secondsBlock = document.querySelector(".timer__seconds")

let interval


const numWord = (value, words) => {

    value = Math.abs(value) % 100
    const lastNum = value % 10
    if (value > 10 && value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum == 1) return words[0]
    return words[2]
}


const updateTimer = () => {

    const date = new Date()
    const dateDeadline = new Date("22 april 2022").getTime()
    const timeRemaining = (dateDeadline - date) / 1000

    const days = Math.floor(timeRemaining / 60 / 60 / 24)
    const hours = Math.floor(timeRemaining / 60 / 60) % 24
    const minutes = Math.floor(timeRemaining / 60) % 60
    const seconds = Math.floor(timeRemaining) % 60

    const fDays = days < 10 ? "0" + days : days
    const fHours = hours < 10 ? "0" + hours : hours
    const fMinutes = minutes < 10 ? "0" + minutes : minutes
    const fSeconds = seconds < 10 ? "0" + seconds : seconds


    const vremya = document.querySelectorAll(".timer__text")
    const daySklon = vremya[0].textContent = numWord(fDays, ["день", "дня", "дней"])
    const hourSklon = vremya[1].textContent = numWord(fHours, ["час", "часа", "часов"])
    const minSklon = vremya[2].textContent = numWord(fMinutes, ["минута", "минуты", "минут"])
    const secSklon = vremya[3].textContent = numWord(fSeconds, ["секунда", "секунды", "секунд"])


    daysBlock.textContent = fDays
    hoursBlock.textContent = fHours
    minutesBlock.textContent = fMinutes
    secondsBlock.textContent = fSeconds

    if (timeRemaining <= 0) {
        clearInterval(interval)


        daysBlock.style.color = "red"
        hoursBlock.style.color = "red"
        minutesBlock.style.color = "red"
        secondsBlock.style.color = "red"


        daysBlock.textContent = "00"
        hoursBlock.textContent = "00"
        minutesBlock.textContent = "00"
        secondsBlock.textContent = "00"
    }
}
interval = setInterval(updateTimer, 500)
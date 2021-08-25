const weatherForm = document.querySelector('form')
const search = document.querySelector('#input')
const message0 = document.querySelector('#message-0')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const message3 = document.querySelector('#message-3')
const message4 = document.querySelector('#message-4')
const message5 = document.querySelector('#message-5')
const message6 = document.querySelector('#message-6')
const message7 = document.querySelector('#message-7')
const message8 = document.querySelector('#message-8')

weatherForm.addEventListener('submit', (error) => {
    error.preventDefault()
    const location = search.value
    
    message0.textContent = '    Loading...     '
    fetch('/weather?search=' + location).then((response) => {
        
        response.json().then((output) => {
            const {error}=output;
            if (error) {
                alert(error);
                message0.textContent = "Enter Again";
            } else {
                const {current,location}=output;
                message0.textContent = ""
                message1.textContent = current.observation_time
                message2.textContent = current.temperature
                message3.textContent = current.weather_descriptions
                message4.textContent = current.precip
                message5.textContent = current.wind_speed
                message6.textContent = current.humidity
                message7.textContent = current.visibility
                message8.textContent = location.name + ", " + location.country
            }
        })
    })
})
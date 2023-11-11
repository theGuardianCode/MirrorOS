const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
const months = ["Jan", "Feb", "Mar", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const updateTime = () => {
	let element = document.getElementById('datetime')
	const date = new Date()
	const text = `<div class="time"><h1>${date.toLocaleTimeString()}</h1></div><div class="date bottom" ><h3>${days[date.getDay() - 1]}, ${date.getDate()} ${months[date.getMonth() - 1]}</h3></div>`

	element.innerHTML = text
}

const updateWeather = () => {
	let element = document.getElementById('weather')

	const url = `https://api.openweathermap.org/data/2.5/weather?q=Cairns&appid=4bbd8c76efb20600772acc0c381b9dc8&units=metric`
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const type = data["weather"][0]["main"]
			const temp = data["main"]["temp"]
			const city = data["name"]
				
			const text = `<div class="weather-main"><img src="../img/${type.toLowerCase()}.png" alt="${type}"><h1>${temp}&#176C</h1></div><div class="weather-city"><h3>${city}</h3></div>`
			element.innerHTML = text
		})
		.catch((error) => {
			console.log(error)
		})
}

setTimeout(updateWeather, 1000)

setInterval(updateTime, 1000)
setInterval(updateWeather, 30 * 60 * 1000)
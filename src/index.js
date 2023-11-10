const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
const months = ["Jan", "Feb", "Mar", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const updateTime = () => {
	let element = document.getElementById('datetime')
	const date = new Date()
	const text = `<div class="time"><h1>${date.toLocaleTimeString()}</h1></div><div class="date"><h3>${days[date.getDay() - 1]}, ${date.getDate()} ${months[date.getMonth() - 1]}</h3></div>`

	element.innerHTML = text
}

const updateWeather = () => {
	let element = document.getElementById('weather')

	const url = `https://api.openweathermap.org/data/2.5/weather?q=Cairns&appid=&units=metric`
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const type = data["weather"][0]["main"]
			const temp = data["main"]["temp"]
				
			const text = `<h1>${temp}&#176C</h1>`
			element.innerHTML = text
		})
		.catch((error) => {
			console.log(error)
		})
}

setTimeout(updateWeather, 1000)

setInterval(updateTime, 1000)
setInterval(updateWeather, 30 * 60 * 1000)
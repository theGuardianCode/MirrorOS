const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const updateTime = () => {
	let element = document.getElementById('time')
	const date = new Date()
	const text = date.getHours() % 24 + ":" + date.getMinutes() + "\n" + days[date.getDay() - 1]

	element.innerHTML = text
}

setInterval(updateTime, 1000)
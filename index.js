const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
const months = ["Jan", "Feb", "Mar", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const updateTime = () => {
	let element = document.getElementById('time')
	const date = new Date()
	const text = date.toLocaleTimeString() + "<br>" + days[date.getDay() - 1] + "&nbsp" + date.getDate() + " " + months[date.getMonth() - 1]

	element.innerHTML = text
}

setInterval(updateTime, 1000)
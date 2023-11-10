const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	})

	win.loadFile('./src/index.html')
	// win.removeMenu()
}

app.whenReady().then(() => {
	createWindow()
})
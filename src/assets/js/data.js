
if (document.readyState === 'complete' || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
	onReady()
} else {
	document.addEventListener('DOMContentLoaded', onReady)
}

function onReady() {
	const socket = io()
	socket.on('connect', () => {
		console.log('connected to server')
	})

	socket.on('newLog', log => {
		const table = document.querySelector('#log-container table tbody')
		const row = table.insertRow(0)
		row.insertCell(0).innerHTML = log.name
		row.insertCell(1).innerHTML = log.logs
	})
}
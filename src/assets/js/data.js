if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
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
		row.insertCell(0).innerHTML = `<img src="/images/${log.Color__c.toLowerCase()}_log.png" alt="${log.Color__c}" />`
		row.insertCell(1).innerHTML = log.Process_name__c
		row.insertCell(2).innerHTML = log.Level__c
		row.insertCell(3).innerHTML = log.Process_type__c
		row.insertCell(4).innerHTML = log.Functional_context__c
		row.insertCell(5).innerHTML = log.Message__c
		row.insertCell(6).innerHTML = log.Stacktrace__c
		row.insertCell(7).innerHTML = log.Log_date__c
		row.insertCell(8).innerHTML = log.Running_user__c
		row.insertCell(9).innerHTML = log.Instance_name__c
		row.insertCell(10).innerHTML = log.Named_credential__c
		row.insertCell(11).innerHTML = log.Route__c
		showDetailView(row)
	})

	const showDetailView = row => {
		document.querySelector('#modal_backdrop').classList.add('backdrop-open')
		document.querySelector('#details-modal').classList.add('modal-open')
		document.querySelector('#details-modal .close').addEventListener('click', _ => {
			document.querySelector('#modal_backdrop').classList.remove('backdrop-open')
			document.querySelector('#details-modal').classList.remove('modal-open')
		})
		const logDetails = document.querySelectorAll('#details-modal .modal-content .desc span')
		for (let index = 0; index < row.cells.length; index++) {
			logDetails[index].innerHTML = row.cells[index].innerHTML
		}
	}

	document.querySelectorAll('#log-container table tbody tr').forEach(row => {
		row.addEventListener('click', _ => {
			showDetailView(row)
		})
	})
}

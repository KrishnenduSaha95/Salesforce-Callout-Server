import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
	const db = req.app.locals.db
	db.find({}, (err, logs) => {
		if (err) {
			res.sendStatus(500)
		}
		res.json(logs)
	})
})

router.post('/', (req, res) => {
	const db = req.app.locals.db
	const io = req.app.locals.io
	db.insert(req.body, (err, log) => {
		if (err) {
			res.sendStatus(400)
		}
		res.sendStatus(200)
		io.emit('newLog', log)
	})
})

export default router
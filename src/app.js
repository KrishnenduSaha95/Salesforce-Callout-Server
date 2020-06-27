import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import nedb from 'nedb'
import { default as loggerRouter } from './routes/logger.js'

const app = express()
const db = new nedb({ filename: './database/logs.json', autoload: true })
app.locals.db = db

app.use(helmet())
app.use(morgan('common'))
app.use(express.static('./src/assets'))
app.use(express.json())

app.set('view engine', 'pug')
app.set('views', './src/pages')
app.locals.pretty = true


app.get('/', (_, res) => {
	db.find({}, (err, logs) => {
		if (err) {
			res.render('logger', { err })
		}
		res.render('logger', { data: logs })
	})
})

app.use('/logger', loggerRouter)

app.all('*', (_, res) => {
	res.sendStatus(404)
})


export default app
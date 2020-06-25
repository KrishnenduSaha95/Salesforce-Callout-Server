import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

app.use(helmet())
app.use(morgan('common'))
app.use(express.static('./src/assets'))

app.set('view engine', 'pug')
app.set('views', './src/pages')
app.locals.pretty = true


app.get('/', (req, res) => {
    res.render('logger')
})

export default app
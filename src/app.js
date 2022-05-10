import chalk from 'chalk';
import express from 'express';
import db from './config/dbConnect.js';
import routes from './routers/index.js';

db.on('error', console.log.bind(console, chalk.red('Connection Error!')));
db.once('open', () => {
    console.log(chalk.green('Database connected sucessfully!!'));
})

const app = express();


app.use(express.json());

routes(app);



export default app;
import app from './src/app.js';
const port = process.env.PORT || 3000;
import chalk from 'chalk'; 

app.listen(port, () => {
    console.log(chalk.green(`Server Online!!, Port: ${port}`));
});
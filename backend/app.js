// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import { index } from "./index.js"

dotenv.config({
    path: './.env'
})

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
})
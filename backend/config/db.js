import mongoose from 'mongoose'
import config from './config.js'
import colors from 'colors'
console.log(config.PORT)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Connected to DATABASE ${conn.connection.host}`.magenta)
    } catch (error) {
        console.error(`Error Message ${error}`)
        process.exit(1);
    }
}

export default connectDB
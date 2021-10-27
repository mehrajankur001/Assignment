import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const config = {
    PORT: process.env.PORT,
    DB: process.env.DB,
}

export default config
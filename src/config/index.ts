import dotenv from "dotenv";

dotenv.config();

const Config = {
    // NODE_ENV: process.env.NODE_ENV || "development",
    PORT: Number(process.env.PORT) || 3002,
    MONGO_URI : process.env.MONGO_URI || ''
}

export default Config;
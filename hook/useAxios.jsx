import axios from 'axios';


switch (process.env.NEXT_PUBLIC_MODE) {
    case "development":
        // URL = "https://localhost:3000"
        URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL
        break
    case "PRODUCTION":
        URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL
        break
    default:
        URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL
}

const instance = axios.create({
    baseURL: URL
})


export default instance;
import axios from "axios"

const KEY = "AIzaSyASKhd2OaKk2E3oTgRVhys1mFOBqOmpdpo"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 6,
        key: KEY
    }
})
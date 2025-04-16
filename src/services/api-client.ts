import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: 'd597896a824c422e86511271485fccb1'
    }
})
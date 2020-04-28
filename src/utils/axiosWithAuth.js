import axios from 'axios'

let token = window.localStorage.getItem('token')

export const axiosWithAuth = () => {
    return axios.create({
        header: {
            Authorization: token
        },
        baseURL: "http://localhost:5000/api"
    })
}
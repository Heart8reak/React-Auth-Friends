import axios from 'axios'


export const axiosWithAuth = () => {
    let token = localStorage.getItem('token')
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "http://localhost:5000/api"
    })
}

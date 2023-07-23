require('dotenv').config()

const API_KEY = process.env
const url = 'https://api.nasa.gov/planetary/apod?api_key='

export default async (urlParams?: String) => {
    try {
        const response = await fetch(`${url}${API_KEY}${typeof urlParams !== 'undefined' && urlParams?.length > 0 ? urlParams : ''}`)
        const data = await response.json()

        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}
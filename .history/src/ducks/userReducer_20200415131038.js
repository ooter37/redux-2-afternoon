import axios from 'axios'


const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserData() {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    return state
}
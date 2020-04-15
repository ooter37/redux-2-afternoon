import axios from 'axios'

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'

export function requestBudgetData(){
    let data = axios.get('/api/budget-data').then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: res.data
    }
}

export default function reducer(state = initialState, action) {
    return state
}
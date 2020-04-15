import axios from 'axios'

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'
const ADD_PURCHASE = 'ADD_PURCHASE'

export function requestBudgetData(){
    let data = axios.get('/api/budget-data').then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}
export function addPurchase(price, description, category){
    axios.post('/api/budget-data/purchase', {description, price, category}).then(res => res.data {
        return {
            type: ADD_PURCHASE,
            payload: data
        }
    })
}

export default function budgetReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_BUDGET_DATA + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case REQUEST_BUDGET_DATA + '_FULFILLED':
            return {
                ...state,
                ...action.payload,
                loading: false
            }
            default:
                return state
    }

}
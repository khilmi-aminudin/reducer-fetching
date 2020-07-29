import React,{ useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    error : '',
    post : {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCES' :
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        case 'FETCH_ERROR' :
            return {
                loading : false,
                post : {},
                error : 'Something went '
            }
        default :
            return state
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            dispatch({type: 'FETCH_SUCCES', payload : res.data })
        })
        .catch(err => {
            dispatch({type: 'FETCH_ERROR', payload : {} })
        })
    }, [])

    return (
        <div>
            <h1>{state.loading ? 'loading' : state.post.title }
            {state.error ? state.error : null }</h1>
        </div>
    )
}

export default DataFetchingTwo

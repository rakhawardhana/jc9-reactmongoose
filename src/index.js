import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore} from 'redux'

import App from './components/App'
import reducers from './reducers/index'

// membuat store, yang banyak lacinya
var STORE = createStore(reducers)



ReactDOM.render(
    <Provider store = {STORE}>
    <App/>
    </Provider>,
    document.getElementById('root')
)




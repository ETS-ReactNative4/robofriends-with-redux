import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './containers/App';
import './containers/App.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers';


const logger = createLogger();

//const store = createStore(rootReducer); <-- the parameter is the reducer(s)
const store = createStore(searchRobots, applyMiddleware(logger)); 

ReactDOM.render(
    
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();

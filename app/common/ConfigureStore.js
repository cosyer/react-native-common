/**
 * Created by cosyer on 2017/4/11.
 */
'use strict'
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './RootReducer'

const createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store=createStoreWithMiddleware(rootReducer,initialState);
    return store;
}


import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feelingsReducer = (state = [], action) => {
    if (action.type === "SET_FEELING") {
        const newFeeling = action.payload
        return [...state, newFeeling]
    }
    return state;

}

const understandingReducer = (state= [], action) => {
    if (action.type === "SET_UNDERSTANDING") {
        const newUnderstanding = action.payload
        return [...state, newUnderstanding]

    }
    return state;
}

const supportedReducer = (state= 0, action) => {
    if (action.type === "SET_SUPPORTED") {
        const newSupport = action.payload
        return newSupport

    }
    return state;
}

const commentsReducer = (state= [], action) => {
    if (action.type === "SET_COMMENTS") {
        const newComments = action.payload
        return [...state, newComments]

    }
    return state;
}














    const store = createStore(
    
        combineReducers({
          commentsReducer, feelingsReducer, understandingReducer, supportedReducer// :point_left: Be sure to replace this, too! 
        }),
        applyMiddleware(logger),
      );
      export default store;
      
      
      
      
      
      


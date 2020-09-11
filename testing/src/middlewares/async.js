// Next is a reference to the next middleware on our chain (function)
export default ({ dispatch }) => next => action => {
    // Check to see if the action
    // has a promise on its 'payload' property
    // If it does, then wait for it to resolve
    // If it doesn't, then send the action on to the
    // next middleware  
    if (!action.payload || !action.payload.then) {
        return next(action);
    }
}
    

The idea of `redux` is basically to store the state of your whole application in a sinlge store. 

1. In `Redux`, we store the entire application state in a single store. This makes it easier to manage and track state changes.

2. We create this store using the `configureStore` function, and we give it a reducer function. This reducer function tells Redux how to update the state based on the actions that are dispatched.

3. To manage different parts of the state separately, we use a concept called 'slices'. Each slice corresponds to a specific part of the state, and has its own reducer and actions.

4. We create a slice using the `createSlice` function. This function needs a `name`(to identify the slice), an `initialState` (the starting state value), and `reducers` (an object that describes how the state should be updated for different types of actions).

Each reducer inside the reducers object is a function that takes the current state and an action, and returns a new state. This is the core of Redux: we describe state changes as a result of actions using pure functions (reducers).
`Context API` is useful when you have to share and manage data between components without having to pass props down manually at every level.

1. `Creating Context` : We have created a `UserContext` using `createContext()` which is then exported.
2. `Providing Context` : We then create a `UserContextProvider` to provide the user data to the child components. The `UserContextProvider` wraps around the components that need access to the context data.
3. `Consuming Context` : The `useContext` hook is used to consume the context. In the `Login` component, we use it to access the `setUser` function and update the user data. Similarly, in the `Profile` component, we use it to access the `user` data to display a message.
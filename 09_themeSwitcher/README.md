This project is really interesting. At first, it may seem simple but it is not. I reviewed the code several times and finally I think I grasped the concept of context.

Basically, what we did is pass two methods `lightTheme` and `darkTheme` in the context. As soon as the theme button is clicked, we call the function `lightTheme` or `darkTheme` which will then update `themeMode` which in turn will invoke the  `useEffect` hook that will re-render the whole component; in this case `App` with the new theme. 

Also, we can pass values in the `createContext` in case a component consumes the context outside of the context provider for which it will receive the passed values.
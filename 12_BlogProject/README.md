I learnt a new thing. Accessing `.env` variables depends on build tool. For example, in vite, we use `import.meta.env.FILENAME`. Also, the naming conventions differ. Here, we use the format `VITE_FILENAME`.

Another thing is that we may not necessarily store our .env files in the required format. (asfa instead of "asfa"). So, in our config.js we explicitly convert these variables to strings using the `String()` to ensure that they're treated as strings regardless of the original format.

All our authentication-related logic are grouped together inside auth.js. This provides encapsulation and code flexibility.
Similarly, all our file-related logic are inside config.js

`Header` : Our header contains the navigation bar. We create an array of nav items and run `map` to display each of them. The `authStatus` is used for deciding what buttons to show in the nav bar.
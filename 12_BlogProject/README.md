I learnt a new thing. Accessing `.env` variables depends on build tool. For example, in vite, we use `import.meta.env.FILENAME`. Also, the naming conventions differ. Here, we use the format `VITE_FILENAME`.

Another thing is that we may not necessarily store our .env files in the required format. (asfa instead of "asfa"). So, in our config.js we explicitly convert these variables to strings using the `String()` to ensure that they're treated as strings regardless of the original format.

All our authentication-related logic are grouped together inside auth.js. This provides encapsulation and code flexibility.
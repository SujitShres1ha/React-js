I learnt a new thing. Accessing `.env` variables depends on build tool. For example, in vite, we use `import.meta.env.FILENAME`. Also, the naming conventions differ. Here, we use the format `VITE_FILENAME`.

Another thing is that we may not necessarily store our .env files in the required format. (asfa instead of "asfa"). So, in our config.js we explicitly convert these variables to strings using the `String()` to ensure that they're treated as strings regardless of the original format.

All our authentication-related logic are grouped together inside auth.js. This provides encapsulation and code flexibility.
Similarly, all our file-related logic are inside config.js

`Header` : Our header contains the navigation bar. We create an array of nav items and run `map` to display each of them. The `authStatus` is used for deciding what buttons to show in the nav bar.

`React-hook-form` : `useForm()` is the main hook here from which we get register and handleSubmit functions. `register` is used to register an input field. It helps to track the input's state and apply validation rules. `handleSubmit` is method that takes our submit function and handles form submission.

`AuthLayout.jsx` : It is a wrapper that wraps around children components to provide authentication-based access control. We have used a `useEffect` to check the authStatus and navigate to the appropriate route.

`RTE.jsx` : The `Controller` component acts as a bridge between the react-hook-form and Editor component. The `onChange` function in the  render is provided by the `Controller` and used to update the field's value in react-hook-form's state. The `Controller` component is being used to integrate the Editor component from `@tinymce/tinymce-react` with react-hook-form. The `onEditorChange={onChange}` line is part of this integration. It tells the Editor to call the `onChange` function (provided by Controller) whenever the editor's content changes. This updates the field's value in react-hook-form's state, ensuring that the form state is always in sync with the Editor's content.
I'm keeping all my notes here starting with 07_reactRouter.

//07_reactRouter
react-router-dom is a third-party library, not in core react

Link is a substitue for <a> tag as <a> reloads the page
Navlink is a special type of Link which can be "active" or "inactive" provided its "to" prop matches the current url. We can style the navlink when it is active. ("to" is a substitue for "href")

`Layout` is a way to keep the same look on different pages. For example, if you have a header and footer that you want on every page, you can put them in your `Layout`. Then, you just change what's between them for different pages through `Outlet`.
`Outlet` like a placeholder for your pages. When you navigate to a different page, `Outlet` gets replaced with the content of that page.

We define routing paths in a variable and pass it to `RouterProvider` as a prop.

`useParams` is a hook that allows you to access URL parameters. In a route like `/user/:id`, `:id` is a URL parameter. Inside the component rendered by this route, you can use `useParams` to get the value of `id` from the current URL.

A `loader` is a react-router function used to fetch data before the component is rendered. Rendering a component before fetching the data can create problems as you cannot access its properties if the data has not been fetched.
First, we need to define a loader function in the component to fetch the data.(`loaderData`) Then, we attach it in the route using  `loader` property. To access the data returned by the loader, we use the `useLoaderData` hook inside the component.
So, we are creating a simple todo UI using ContextAPI. 

1. Understanding the whole picture : Basically, we need two components: an `add` component to create a new todo and a `listing` component to display the created todo. In the `listing` component, we need to be able to `edit`, `delete` & `complete` the todos. 

2. Defining structures and functionalities: So, we need a `todos-list` that will contain all the todos and each todo will have an `id`, `todo-message` and `completed` checkmark. The list and all the functionalities will be passed as context data. In our `App.jsx` we use the `useState()` hook and define the functionalities to update the `todos-list`.

(In order to not lose the `todos-list`, we use a web storage object `localStorage` that helps store the data right in the browser with no expiration. So, even if the page reloads, the `todos-list` won't be lost.)

3. Integration of functionalities and components: We integrate the `addTodo` with `TodoForm` and others with `TodoList`. To display every todo in our `todo-list`, we use map and feed each `todo` to the `TodoItem`. 
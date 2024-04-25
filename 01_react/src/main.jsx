import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const element = (
//   <a href='www.google.com' target='_blank'>Click</a>
// )
const user = 'Sujit '

const ReactElement = React.createElement(
  'a',
// user
  {href:'www.google.com',target:'_blank'},
  'Click here',
  // user
)


ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)

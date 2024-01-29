import React from 'react'
import ReactDOM from 'react-dom/client'

/*
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  Children: 'Click me to visit google'
}
*/

const anotherUser = "chai aur me"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

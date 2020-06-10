import React from 'react'
import ReactDOM from 'react-dom'
import UsernameContainer from '../containers/singleProject/components/ProjectReadMe'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UsernameContainer />, div)
})

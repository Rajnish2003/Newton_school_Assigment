import React from 'react'
import App from './text'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
  })
})

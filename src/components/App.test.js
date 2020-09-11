/* global test, beforeEach, afterEach, expect, MouseEvent */
import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import App from './App'

let container
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('displays Welcome to Quizio.', () => {
  act(() => {
    ReactDOM.render(<App />, container)
  })

  const header = container.querySelector('h1')
  expect(header.textContent).toBe('Welcome to Quizio.')
})

test('contains Start Quiz button', () => {
  act(() => {
    ReactDOM.render(<App />, container)
  })

  const button = container.querySelector('button')
  expect(button.textContent).toBe('Start Quiz')

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  const h2 = container.querySelector('h2')
  const h3 = container.querySelector('h3')
  expect(h2.textContent).toContain('Question')
  expect(h3.textContent).toContain('Score')
})

test('starts the Quiz on button click', () => {
  act(() => {
    ReactDOM.render(<App />, container)
  })

  const button = container.querySelector('button')
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  const h2 = container.querySelector('h2')
  const h3 = container.querySelector('h3')
  expect(h2.textContent).toContain('Question')
  expect(h3.textContent).toContain('Score')
})

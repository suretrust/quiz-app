/* global expect, test */
import getAnswers from './getAnswers'

test('combines into an array and sort it', () => {
  expect(
    getAnswers('Dirk%20the%20Daring', [
      'Arthur',
      'Sir%20Toby%20Belch',
      'Guy%20of%20Gisbourne'
    ])
  ).toStrictEqual([
    'Arthur',
    'Dirk the Daring',
    'Guy of Gisbourne',
    'Sir Toby Belch'
  ])

  expect(
    getAnswers('Robert%20Kirkman', [
      'Stan%20Lee',
      'Malcolm%20Wheeler-Nicholson',
      'Robert%20Crumb'
    ])
  ).toStrictEqual([
    'Malcolm Wheeler-Nicholson',
    'Robert Crumb',
    'Robert Kirkman',
    'Stan Lee'
  ])
})

test('returns an array with one string when second param is empty', () => {
  expect(getAnswers('Works', [])).toStrictEqual(['Works'])
})

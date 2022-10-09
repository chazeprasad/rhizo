import React from 'react'
import renderer from 'react-test-renderer'
import {
  EditProvider,
  Field,
  FieldSet,
  SeedControls,
  ResetButton,
} from '../src'

const seed = {
  colors: {
    text: 'black',
    background: 'white',
  },
  fontSizes: [ 12, 14, 16, 20, 24, 32 ],
}

test('renders', () => {
  const json = renderer.create(
    <EditProvider initialSeed={seed}>
      <SeedControls />
    </EditProvider>
  ).toJSON()
  expect(json).toMatchSnapshot()
})

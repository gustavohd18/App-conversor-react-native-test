/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import conversor from '../src/model/Conversor'
it('conversor binario',() => {
  expect(conversor.conversorBinario(15)).toBe('1111')
})

it('conversor hexadecimal',() => {
  expect(conversor.conversorHexadecimal(15)).toBe('f')
})

it('renders correctly', () => {
  renderer.create(<App />);
});

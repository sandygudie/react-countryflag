import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { CountryCode, CountryFlag, CountryName } from '../src'

describe('Common render', () => {
  it('renders country flag without crashing', () => {
    render(<CountryFlag countryName={'Afghanistan'} />)
  })
  it('renders country name without crashing', () => {
    render(<CountryName countryCode={'AD'} />)
  })
  it('renders country code without crashing', () => {
    render(<CountryCode countryName={'Afghanistan'} />)
  })
})

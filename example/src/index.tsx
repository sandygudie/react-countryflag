import React from 'react'
import ReactDOM from 'react-dom/client'
import { CountryFlag, CountryCode, CountryName } from 'react-countryname-flag'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CountryFlag countryName={'Afghanistan'} style={{ fontSize: '30px' }} />
    <br />
    <CountryFlag countryCode={'AG'} />
    <br />
    <CountryCode countryName={'Afghanistan'} />
    <br />
    <CountryName countryCode={'AG'} />
  </React.StrictMode>,
)

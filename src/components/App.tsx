import React from 'react'
import { countries } from '../country'

interface Props {
  countryName: string
  countryCode?: string
}
function CountryFlag({ countryName, countryCode }: Props) {
  return (
    <div>
      {countries.map((country) =>
        country.countryNameEn === countryName || country.countryCode === countryCode ? (
          <p key={country.countryNameEn}>{country.flag}</p>
        ) : (
          ''
        ),
      )}
    </div>
  )
}

export default CountryFlag

// country name from country code and vice versa

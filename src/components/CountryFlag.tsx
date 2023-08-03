import React from 'react'
import { countries } from '../country'

interface Props {
  countryName?: string
  countryCode?: string
  style?: React.CSSProperties
}
function CountryFlag({ countryName, countryCode, style, ...props }: Props) {
  return (
    <>
      {countries.map((country) =>
        country.countryNameEn === countryName || country.countryCode === countryCode ? (
          <span key={country.countryNameEn} {...props} style={{ ...style }} role='img'>
            {country.flag}
          </span>
        ) : (
          ''
        ),
      )}
    </>
  )
}

export default CountryFlag

import React from 'react'
import { countries } from '../country'
import { ICountry } from '../types'

interface Props {
  countryName: string
  style?: React.CSSProperties
}
function CountryCode({ countryName, style, ...props }: Props) {
  return (
    <>
      {countries.map(
        (country: ICountry) =>
          country.countryNameEn === countryName && (
            <span key={country.countryNameEn} {...props} style={{ ...style }}>
              {country.countryCode}
            </span>
          ),
      )}
    </>
  )
}

export default CountryCode

import React from 'react'
import { countries } from '../country'
import { ICountry } from '../types'

interface Props {
  countryCode: string
  style?: React.CSSProperties
}
function CountryName({ countryCode, style, ...props }: Props) {
  return (
    <>
      {countries.map(
        (country: ICountry) =>
          country.countryCode === countryCode && (
            <span key={country.countryNameEn} {...props} style={{ ...style }}>
              {country.countryNameEn}
            </span>
          ),
      )}
    </>
  )
}

export default CountryName

# react-countryname-flag

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

## Installation:

```bash
npm install react-countryname-flag --save-dev
```

or

```bash
yarn add -D react-countryname-flag
```

## Usage :

- #### Get country flag from country name

```js
import { CountryFlag } from 'react-countryname-flag'

<CountryFlag countryName={'Afghanistan'} style={{ fontSize: '10px' }} />

  🇦🇫
```
<br/>

- #### Get country flag from country code

```js
import { CountryFlag } from 'react-countryname-flag'

<CountryFlag countryCode={'AG'} />

  🇦🇬
```
<br/>

- #### Get country code from country name

```js
import { CountryCode } from 'react-countryname-flag'

<CountryCode countryName={'Afghanistan'} />

  // AF
```
<br/>

- #### Get country name from country code

```js
import { CountryName } from 'react-countryname-flag'

<CountryName countryCode={'AG'} />

  // Antigua and Barbuda
```

[npm-url]: https://www.npmjs.com/package/my-react-typescript-package
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
[github-license]: https://img.shields.io/github/license/gapon2401/my-react-typescript-package
[github-license-url]: https://github.com/gapon2401/my-react-typescript-package/blob/master/LICENSE
[github-build]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/my-react-typescript-package

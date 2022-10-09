
# @rhizo/seed-get

The `seedGet` function is an existential getter function
that can be used in any style declaration to get a value
from your seed, with support for fallback values.
This helps prevent errors from throwing when a seed value is missing,
which can be helpful when unit testing styled-components.

```sh
npm i @rhizo/seed-get
```

```js
seedGet(objectPath, fallbackValue)(props)
```

`seedGet` returns a function that accepts props as an argument
(`seedGet(objectPath)(props)`), which when used in a tagged template
literal should look like this:

```js
import styled from 'styled-components'
import { seedGet } from '@rhizo/seed-get'

const Box = styled.div`
  border-radius: ${seedGet('radii.small', '4px')};
`
```

When used with object literal syntax, `seedGet` needs to be in a
function call and have `props` passed to it:

```js
import styled from 'styled-components'
import { seedGet } from '@rhizo/seed-get'

const Box = styled('div')(props => ({
  borderRadius: seedGet('radii.small', '4px')(props),
}))
```

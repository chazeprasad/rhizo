
# @rhizo/prop-types

Add prop types to components built with Rhizo

```sh
npm i rhizo @rhizo/prop-types
```

```js
import styled from 'styled-components'
import { space, color } from 'rhizo'
import propTypes from '@rhizo/prop-types'

const Box = styled('div')(space, color)

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
}
```

## Available Type Categories

* `space`
* `color`
* `layout`
* `typography`
* `flexbox`
* `border`
* `background`
* `position`
* `grid`


## Custom Props

```js
import styled from 'styled-components'
import { space, system } from 'rhizo'
import propTypes, { propType } from '@rhizo/prop-types'

const gridGap = system({
  gap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: [0, 4, 8, 16, 32, 64, 128, 256, 512]
  }
})

const Stack = styled('div')(
  compose(space, gridGap)
)

Stack.propTypes = {
  ...propTypes.space,
  gap: propType,
}
```

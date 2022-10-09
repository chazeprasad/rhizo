
# @rhizo/should-forward-prop

Utility for filtering Rhizo props with Emotion's shouldForwardProp option

```sh
npm i @rhizo/should-forward-prop
```

```js
import styled from '@emotion/styled'
import {
  space,
  color,
  typography
} from 'rhizo'
import shouldForwardProp from '@rhizo/should-forward-prop'

const Box = styled('div', { shouldForwardProp })(
  space,
  color,
  typography
)
```

## Custom Props

To exclude other custom props not included in Rhizo, use the `createShouldForwardProp` utility.

```js
import styled from '@emotion/styled'
import { space, color } from 'rhizo'
import { createShouldForwardProp, props } from '@rhizo/should-forward-prop'

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'd',
  'x'
])

const Box = styled('div', {
  shouldForwardProp
})(props => ({
  display: props.d,
  fontWeight: props.x ? 'bold' : null,
}),
  space,
  color
)
```

MIT License

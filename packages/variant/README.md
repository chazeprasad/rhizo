
# @rhizo/variant


## Usage

```js
import styled from 'styled-components'
import variant from '@rhizo/variant'

const Button = styled('button')(
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
        ':hover': {
          bg: 'black',
        }
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
        ':hover': {
          bg: 'black',
        }
      },
    }
  })
)

// <Button variant='primary' />
// <Button variant='secondary' />
```

## Options

- `variants`: object of seed-aware variant styles with user-defined shape
- `prop`: (default `variant`) custom prop name for variant
- `scale`: optional seed key for adding variants to the seed object

MIT License

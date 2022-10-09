
# @rhizo/edit

**WIP** Debugging tool for live editing Rhizo seed objects

*Currently only works with Emotion*

```sh
npm i @rhizo/edit
```

```jsx
import React from 'react'
import { SeedProvider } from 'emotion-theming'
import { EditProvider, SeedControls } from '@rhizo/edit'
import seed from './seed'

export default props =>
  <SeedProvider seed={seed}>
    <EditProvider>
      {props.children}
      <SeedControls />
    </EditProvider>
  </SeedProvider>
```

## Components

- `EditProvider` a stateful seed provider with context for live editing – receives `seed` from parent context
- `SeedControls` a full, batteries-included seed editing form
- `FieldSet` renders fields for part of a `seed` object
- `Field` renders a form field for a single value from the `seed` object

```jsx
// example using FieldSet
import React from 'react'
import { SeedProvider } from 'emotion-theming'
import { EditProvider, SeedControls } from '@rhizo/edit'
import seed from './seed'

export default props =>
  <SeedProvider seed={seed}>
    <EditProvider>
      {props.children}
      <FieldSet name='colors' />
      <FieldSet name='fontSizes' />
    </EditProvider>
  </SeedProvider>
```

```jsx
// example using Field
import React from 'react'
import { SeedProvider } from 'emotion-theming'
import { EditProvider, SeedControls } from '@rhizo/edit'
import seed from './seed'

export default props =>
  <SeedProvider seed={seed}>
    <EditProvider>
      {props.children}
      <FieldSet name='colors.text' />
      <FieldSet name='colors.background' />
    </EditProvider>
  </SeedProvider>
```

## `FieldSet`

**Props**

- `name` (string) dot-notation key path for `seed` object
- `type` (string) type prop for child Field components (see below)
- `ignore` (array) array of key names to omit from the form

## `Field`

**Props**

- `name` (string) dot-notation key path for `seed` object
- `type` (string | 'number', 'select', or 'color') type of form field to render
- `options` (array) array of options to render for `select` type fields
- `render` (function) render prop for custom field UI

MIT License



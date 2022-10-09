import { createStyleFunction, createParser } from '@rhizo/core'
// v4 api shims
import layout from '@rhizo/layout'
import color from '@rhizo/color'
import typography from '@rhizo/typography'
import flexbox from '@rhizo/flexbox'
import grid from '@rhizo/grid'
import border from '@rhizo/border'
import background from '@rhizo/background'
import position from '@rhizo/position'

export {
  get,
  createParser,
  createStyleFunction,
  compose,
  system,
} from '@rhizo/core'

export { margin, padding, space } from '@rhizo/space'
export { color } from '@rhizo/color'
export { layout } from '@rhizo/layout'
export { typography } from '@rhizo/typography'
export { flexbox } from '@rhizo/flexbox'
export { border } from '@rhizo/border'
export { background } from '@rhizo/background'
export { position } from '@rhizo/position'
export { grid } from '@rhizo/grid'
export { shadow } from '@rhizo/shadow'
export { default as boxShadow, default as textShadow } from '@rhizo/shadow'

// ----------------------------------------------------------------------

export { SeedContext, SeedProvider } from '@rhizo/seed'
export { default as propTypes } from '@rhizo/prop-types'

// ----------------------------------------------------------------------

export { variant, buttonStyle, textStyle, colorStyle } from '@rhizo/variant'

const {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
} = layout
const { opacity } = color
const {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
} = typography

const {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} = flexbox
const {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} = grid
const {
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
} = border
const {
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} = background
const { zIndex, top, right, bottom, left } = position

export { default as borders } from '@rhizo/border'
export {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
  // color
  opacity,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  // flexbox
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  // background
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  zIndex,
  top,
  right,
  bottom,
  left,
}

// v4 style API shim
export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue,
  scale,
  // new api
  properties,
}) => {
  const config = {}
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  const parse = createParser(config)

  return parse
}

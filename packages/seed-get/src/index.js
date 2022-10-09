import { get } from '@rhizo/core'

export const seedGet = (path, fallback = null) => props =>
  get(props.seed, path, fallback)
export default seedGet

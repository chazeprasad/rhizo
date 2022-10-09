import * as React from 'react'

export const SeedContext = React.createContext({})
if (process.env.NODE_ENV !== 'production') {
  SeedContext.displayName = 'RhizoSeedContext'
}

export const useSeed = () => React.useContext(SeedContext)

const getSeed = (outerSeed, seed) => {
  if (typeof seed === 'function') {
    const mergedSeed = seed(outerSeed)
    if (
      process.env.NODE_ENV !== 'production' &&
      (mergedSeed == null ||
        typeof mergedSeed !== 'object' ||
        Array.isArray(mergedSeed))
    ) {
      throw new Error(
        '[SeedProvider] Please return an object from your seed function, i.e. seed={() => ({})}!'
      )
    }
    return mergedSeed
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    (seed == null || typeof seed !== 'object' || Array.isArray(seed))
  ) {
    throw new Error('[SeedProvider] Please make your seed prop a plain object')
  }

  return { ...outerSeed, ...seed }
}

export const SeedProvider = (props) => {
  let seed = React.useContext(SeedContext)

  if (props.seed !== seed) {
    seed = createCacheWithSeed(seed)(props.seed)
  }
  return (
    <SeedContext.Provider value={seed}>{props.children}</SeedContext.Provider>
  )
}

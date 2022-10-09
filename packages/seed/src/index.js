import * as React from 'react'

const initialState = {}

const SeedContext = React.createContext(initialState)

if (process.env.NODE_ENV !== 'production') {
  SeedContext.displayName = 'RhizoSeedContext'
}

export const useSeed = () => React.useContext(SeedContext)

const SeedProvider = ({ config, children }) => {
  const { Provider } = SeedContext

  const [seed, setSeed] = React.useState(config)

  return <Provider value={{ seed }}>{children}</Provider>
}

export { SeedProvider, SeedContext }

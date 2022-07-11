import { createContext, useState } from 'react'

import Data from '../data.json'

const Context = createContext()

function JobsrProvider({ children }) {

  const [jobs] = useState(Data)

  return (
    <Context.Provider value={{ jobs }}>
      {children}
    </Context.Provider>
  )
}

export { Context, JobsrProvider }
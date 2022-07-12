import { createContext, useState } from 'react'

import Data from '../data.json'

const Context = createContext()

function JobsrProvider({ children }) {

  const [jobs] = useState(Data)
  const [Filter, setFilter] = useState([])

  function Search(search) {
    if (Filter.includes(search)) return;
    setFilter([...Filter, search])
  }

  function Clean() { setFilter([]) }

  function OneClean(element) {
    let NewFilter = Filter.filter(e => e !== element)
    setFilter(NewFilter)
  }

  return (
    <Context.Provider value={{ jobs, Search, Filter, Clean, OneClean }}>
      {children}
    </Context.Provider>
  )
}

export { Context, JobsrProvider }
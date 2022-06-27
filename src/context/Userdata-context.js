import React, { useState,createContext } from "react"
const UserdataContext = createContext(null)

function UserdataProvider({children}) {
    const [userdata, setUserdata] = useState({ name: "", email: "", bio: "" })
  return(
    <UserdataContext.Provider value={{userdata,setUserdata}}>
        {children}
    </UserdataContext.Provider>
  )
}

export { UserdataContext, UserdataProvider }
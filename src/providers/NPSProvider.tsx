import React, { ReactNode, useState } from 'react';

type NpsContextValue = {
  scale: number,
  setScale: Function,
  disableConfirm:boolean,
  setDisableConfirm:Function
}

const NPSContext = React.createContext<NpsContextValue>({} as NpsContextValue)
type Props = {
  children:ReactNode
}

export const NPSProvider = (props:Props) => {
  const {children} = props
  const [scale, setScale] = useState(-1)
  const [disableConfirm,setDisableConfirm] = useState(true)
  return (
    <NPSContext.Provider value={{scale,setScale,disableConfirm,setDisableConfirm}}>
      {children}
    </NPSContext.Provider>
  )
}
export const useNpsContext = () => {
  return React.useContext(NPSContext)
}

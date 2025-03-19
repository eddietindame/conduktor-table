import { createContext, useContext } from 'react'

import { Person } from '@/types/people'

type PersonSheetContextType = {
  isOpen: boolean
  person: Person | null
  openPersonSheet: (person: Person) => void
  closePersonSheet: () => void
}

export const PersonSheetContext = createContext<
  PersonSheetContextType | undefined
>(undefined)

export const usePersonSheet = () => {
  const context = useContext(PersonSheetContext)
  if (!context)
    throw new Error('usePerson must be used within a PersonSheetProvider')
  return context
}

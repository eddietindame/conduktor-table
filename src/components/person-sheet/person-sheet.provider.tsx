import { useState } from 'react'

import { PersonSheet, PersonSheetContext } from '.'
import { Person } from '@/types/people'

export const PersonSheetProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [person, setPerson] = useState<Person | null>(null)

  const openPersonSheet = (person: Person) => {
    setPerson(person)
    setIsOpen(true)
  }

  const closePersonSheet = () => {
    setIsOpen(false)
    setPerson(null)
  }

  return (
    <PersonSheetContext.Provider
      value={{ isOpen, person, openPersonSheet, closePersonSheet }}
    >
      {children}
      <PersonSheet
        isOpen={isOpen}
        closePersonSheet={closePersonSheet}
        person={person}
      />
    </PersonSheetContext.Provider>
  )
}

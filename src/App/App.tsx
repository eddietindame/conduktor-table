import { PeopleTable } from '@/components/people-table'
import { usePersonSheet } from '@/components/person-sheet'

export function App() {
  const { openPersonSheet } = usePersonSheet()
  return (
    <main>
      <PeopleTable onClickPerson={openPersonSheet} />
    </main>
  )
}

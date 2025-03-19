import { PeopleTable } from '@/components/people-table'
import { PersonSheetProvider } from '@/components/person-sheet'

export function App() {
  return (
    <PersonSheetProvider>
      <main>
        <PeopleTable />
      </main>
    </PersonSheetProvider>
  )
}

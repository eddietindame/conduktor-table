import { useState } from 'react'
import data from '@/../random-people-data.json'
import {
  Table,
  Button,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from '@/components/ui'
import { Person } from '@/types/people'

const PAGE_SIZE = 10

export const PeopleTable = () => {
  const [page, setPage] = useState(1)
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)

  const cols = ['Name', 'DOB', 'Email', 'Verified', 'Salary']
  const totalPages = Math.ceil(data.ctRoot.length / PAGE_SIZE)
  const paginatedData: Person[] = data.ctRoot.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  )

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            {cols.map(key => (
              <TableHead key={key}>{key}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((person, index) => (
            <TableRow key={index} onClick={() => setSelectedPerson(person)}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.dob}</TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.verified ? '✔' : '✖'}</TableCell>
              <TableCell>${person.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="my-4 flex items-center gap-4">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
      {selectedPerson && (
        <div>
          <h2>{selectedPerson.name}</h2>
          <p>DOB: {selectedPerson.dob}</p>
          <p>Email: {selectedPerson.email}</p>
          <p>Verified: {selectedPerson.verified ? 'Yes' : 'No'}</p>
          <p>Salary: ${selectedPerson.salary.toLocaleString()}</p>
        </div>
      )}
    </div>
  )
}

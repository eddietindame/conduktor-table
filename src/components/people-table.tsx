import { useState } from 'react'

import {
  Table,
  Button,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui'
import { usePersonSheet } from '@/components/person-sheet'
import { Person } from '@/types/people'
import data from '@/../random-people-data.json'

const PAGE_SIZES = [10, 20, 50, 100]

export const PeopleTable = () => {
  const { openPersonSheet } = usePersonSheet()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const cols = ['Name', 'DOB', 'Email', 'Verified', 'Salary']
  const totalPages = Math.ceil(data.ctRoot.length / pageSize)
  const paginatedData: Person[] = data.ctRoot.slice(
    (page - 1) * pageSize,
    page * pageSize,
  )

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <Select
          value={pageSize.toString()}
          onValueChange={val => setPageSize(parseInt(val, 10))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Set page size" />
          </SelectTrigger>
          <SelectContent>
            {PAGE_SIZES.map(size => (
              <SelectItem key={size} value={size.toString()}>
                {size} per page
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
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
            <TableRow key={index} onClick={() => openPersonSheet(person)}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.dob}</TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.verified ? '✔' : '✖'}</TableCell>
              <TableCell>£{person.salary.toLocaleString()}</TableCell>
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
    </div>
  )
}

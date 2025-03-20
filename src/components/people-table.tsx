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
import { Person } from '@/types/people'
import data from '@/../random-people-data.json'

const PEOPLE_DATA: Person[] = data.ctRoot
const PAGE_SIZES = [10, 20, 50, 100]

type PeopleTableProps = {
  onClickPerson: (person: Person) => void
}

export const PeopleTable = ({ onClickPerson }: PeopleTableProps) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [sortKey, setSortKey] = useState<keyof Person | null>(null)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>('asc')

  const sortedData = sortKey
    ? [...PEOPLE_DATA].sort((a, b) => {
        const aValue = a[sortKey]
        const bValue = b[sortKey]
        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
        return 0
      })
    : PEOPLE_DATA

  const cols = ['Name', 'DOB', 'Email', 'Verified', 'Salary']
  const totalPages = Math.ceil(sortedData.length / pageSize)
  const paginatedData: Person[] = sortedData.slice(
    (page - 1) * pageSize,
    page * pageSize,
  )

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between">
        <div className="flex items-center gap-4">
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
          <Button
            disabled={!sortKey}
            onClick={() => {
              setSortKey(null)
              setSortOrder(null)
            }}
          >
            Reset sort
          </Button>
        </div>

        <div className="flex items-center gap-4">
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
      <Table>
        <TableHeader>
          <TableRow>
            {cols.map(key => (
              <TableHead
                key={key}
                onClick={() => {
                  setSortKey(key.toLowerCase() as keyof Person)
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                }}
              >
                {key}{' '}
                {sortKey === key.toLowerCase()
                  ? sortOrder === 'asc'
                    ? '↑'
                    : '↓'
                  : ''}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((person, index) => (
            <TableRow key={index} onClick={() => onClickPerson(person)}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.dob}</TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.verified ? '✔' : '✖'}</TableCell>
              <TableCell>£{person.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

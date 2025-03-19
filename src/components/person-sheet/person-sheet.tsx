import {
  Label,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui'
import { Person } from '@/types/people'
import { useId } from 'react'

type PersonSheetProps = {
  person: Person | null
  isOpen?: boolean
  closePersonSheet: () => void
}

export const PersonSheet = ({
  person,
  isOpen = false,
  closePersonSheet,
}: PersonSheetProps) => {
  const dobId = useId()
  const emailId = useId()
  const verifiedId = useId()
  const salaryId = useId()
  return (
    <Sheet open={isOpen} onOpenChange={closePersonSheet}>
      <SheetContent className="p-4 py-16">
        {person && (
          <>
            <SheetHeader className="text-3xl font-bold">
              <SheetTitle>{person.name}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              <p>
                <Label className="text-md inline font-bold" id={dobId}>
                  DOB:
                </Label>{' '}
                <span aria-labelledby={dobId}>{person.dob}</span>
              </p>
              <p>
                <Label className="text-md inline font-bold" id={emailId}>
                  Email:
                </Label>{' '}
                <span aria-labelledby={emailId}>{person.email}</span>
              </p>
              <p>
                <Label className="text-md inline font-bold" id={verifiedId}>
                  Verified:
                </Label>{' '}
                <span aria-labelledby={verifiedId}>
                  {person.verified ? 'Yes' : 'No'}
                </span>
              </p>
              <p>
                <Label className="text-md inline font-bold" id={salaryId}>
                  Salary:
                </Label>{' '}
                <span aria-labelledby={salaryId}>
                  £{person.salary.toLocaleString()}
                </span>
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export type Address = {
  street: string
  town: string
  postcode?: string
}

export type Person = {
  _id: string
  name: string
  dob: string
  address: Address
  telephone: string
  pets: string[]
  score: number
  email: string
  url: string
  description: string
  verified: boolean
  salary: number
}

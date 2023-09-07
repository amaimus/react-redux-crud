import { createSlice } from '@reduxjs/toolkit'

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
}

const initialState: UserWithId[] = [
  {
    id: '1',
    name: 'Viola Amherd',
    email: 'viola@email.com',
    github: 'viola_amherd'
  },
  {
    id: '2',
    name: 'Simonetta Sommaruga',
    email: 'simonetta@email.com',
    github: 'simonetta_sommaruga'
  },
  {
    id: '3',
    name: 'Alain Berset',
    email: 'alain@email.com',
    github: 'alain_berset'
  },
  {
    id: '4',
    name: 'Ignazio Cassis',
    email: 'ignazio@email.com',
    github: 'ignazio_cassis'
  }
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer

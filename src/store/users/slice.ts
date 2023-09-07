import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserId = string
export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
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
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    }
  }
})

export default usersSlice.reducer
export const { deleteUserById } = usersSlice.actions

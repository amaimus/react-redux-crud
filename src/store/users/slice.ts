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

const DEFAULT_STATE_MOCK = [
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

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  return persistedState != null
    ? JSON.parse(persistedState).users
    : DEFAULT_STATE_MOCK
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
      if (!isUserAlreadyDefined) {
        return [...state, action.payload]
      }
    }
  }
})

export default usersSlice.reducer
export const { deleteUserById, addNewUser, rollbackUser } = usersSlice.actions

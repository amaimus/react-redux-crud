import { type Middleware, configureStore } from '@reduxjs/toolkit'
import usersReducer, { rollbackUser } from './users/slice'
import { toast } from 'sonner'

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

const syncWithDatabase: Middleware = store => next => action => {
  const { type, payload } = action
  const previousState = store.getState()

  next(action)

  if (type === 'users/deleteUserById') {
    const userIdToRemove = payload
    const userToRemove = previousState.users.find(user => user.id === userIdToRemove)

    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) toast.success('User removed')
      })
      .catch(() => {
        toast.error(`Error deleting user ${action.payload}`)

        if (userToRemove !== -1) store.dispatch(rollbackUser(userToRemove))
        console.log('error')
      })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDatabase]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

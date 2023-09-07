import { useAppDispatch } from '../hooks/store'
import { type UserId, deleteUserById } from '../store/users/slice'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return { removeUser }
}

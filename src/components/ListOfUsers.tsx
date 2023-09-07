import { Card, Table, TableHead, TableRow, Icon, TableHeaderCell, TableBody, TableCell, Text, Title, Badge } from '@tremor/react'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { useUserActions } from '../hooks/useUserActions'
import { useAppSelector } from '../hooks/store'

export function ListOfUsers () {
  const users = useAppSelector(state => state.users)
  const { removeUser } = useUserActions()

  return (
    <Card>
      <Title>
        Users
        <Badge className='ml-2'> {users.length}</Badge>
      </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.name}>
              <TableCell>{user.id}</TableCell>
              <TableCell className='flex users-center gap-4'>
                <img
                  className='w-12 h-12 rounded-full'
                  src={`https://unavatar.io/github${user.github}`}
                  alt={`github image for ${user.github}`} />
                <Text>{user.name}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.email}</Text>
              </TableCell>
              <TableCell>
                <button type='button' onClick={() => { removeUser(user.id) }}>
                  <Icon size='md' icon={TrashIcon} />
                </button>
                <button>
                  <Icon size='md' icon={PencilSquareIcon} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

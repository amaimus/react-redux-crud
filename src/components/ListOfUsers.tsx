import { Card, Table, TableHead, TableRow, Icon, TableHeaderCell, TableBody, TableCell, Text, Title, Badge } from '@tremor/react'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { useAppSelector } from '../hooks/store'

export function ListOfUsers () {
  const users = useAppSelector(state => state.users)

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
          {users.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.id}</TableCell>
              <TableCell className='flex items-center gap-4'>
                <img
                  className='w-12 h-12 rounded-full'
                  src={`https://unavatar.io/github${item.github}`}
                  alt={`github image for ${item.github}`} />
                <Text>{item.name}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.email}</Text>
              </TableCell>
              <TableCell>
                <button type='button'>
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

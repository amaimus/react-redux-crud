import { Card, Table, TableHead, TableRow, Icon, TableHeaderCell, TableBody, TableCell, Text, Title, Badge } from '@tremor/react'

import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
const users: {
  name: string
  id: number
  email: string
  github: string
}[] = [
  {
    name: 'Viola Amherd',
    id: 1,
    email: 'viola@email.com',
    github: 'viola_amherd'
  },
  {
    name: 'Simonetta Sommaruga',
    id: 2,
    email: 'simonetta@email.com',
    github: 'simonetta_sommaruga'
  },
  {
    name: 'Alain Berset',
    id: 3,
    email: 'alain@email.com',
    github: 'alain_berset'
  },
  {
    name: 'Ignazio Cassis',
    id: 4,
    email: 'ignazio@email.com',
    github: 'ignazio_cassis'
  }
]

export function ListOfUsers () {
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

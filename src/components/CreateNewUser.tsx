import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'

import React, { useState } from 'react'

export const CreateNewUser = () => {
  const [result, setResult] = useState<'ok' | 'ko' | null >(null)
  const { addUser } = useUserActions()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (name === '' || email === '' || github === '') {
      setResult('ko'); return
    }

    addUser({ name, email, github })
    setResult('ok')
    form.reset()
  }

  return (
    <Card>
      <Title>Create New User</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder='Aqui el nombre'
          name='name'
        />
        <TextInput
          placeholder='Aqui el email'
          name='email'
        />
        <TextInput
          placeholder='Aqui el usuario de Github'
          name='github'
        />
        <div>
          <Button className='mt-4' type='submit'>
            Create User
          </Button>
          <span>
            { result === 'ok' && (<Badge color='green'> Saved!</Badge>)}
            { result === 'ko' && (<Badge color='red'> Error!</Badge>)}
          </span>
        </div>
      </form>
    </Card>
  )
}

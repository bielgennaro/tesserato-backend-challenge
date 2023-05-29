import { test } from '@japa/runner'

test('display welcome page', async ({ client }) => {
  const response = await client.get('/')

  response.assertBodyContains({ hello: 'world' })
})

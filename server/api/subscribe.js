export default defineEventHandler(async event => {
  const body = await readBody(event)

  const uri = 'https://jsonplaceholder.typicode.com/posts'

  const { data } = $fetch(uri, body)

  return {
    data
  }
})

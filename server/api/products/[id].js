import Products from './products.json'

export default defineEventHandler(async (event) => {
  return new Promise((resolve) => {
    const { id } = event.context.params
    const product = Products.find(el => el.id === parseInt(id))
    resolve({ data: product })
  })
})
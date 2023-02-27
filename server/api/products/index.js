import Products from './products.json'

export default defineEventHandler (() => {
  return { data: Products }
})

/* export default defineEventHandler (async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: Products })
    }, 2000)
  })  
}) */
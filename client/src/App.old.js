import { useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';

const products = [
  {id: 1, name: 'chaussure', price: 120 },
  {id: 2, name: 'tee-shirt', price: 18 },
  {id: 3, name: 'pantalon', price: 48 },
]

const postProduct = (params) => {
  setTimeout(()=> {
    const newProduct = {
      id: products.length+1,
      name: params.name,
      price: params.price,
    }

    products.push(newProduct)
    return newProduct
  }, 2000)
}

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(products)
    }, 4000)
  })
}

const App = () => {

  const queryClient = useQueryClient()

  const [ name, setName ] = useState('')
  const [ price, setPrice ] = useState(0)

  const { data, error, isFetching } = useQuery('products', getProducts)
  const addProduct = useMutation(postProduct, {
    onSuccess: () => queryClient.invalidateQueries('products')
  })

  return (
    <div className="App">
      {
        !isFetching && data ? (
          <>
            <ul>{data.map(x => (<li key={x.id}>{ x.name }</li>) )}</ul>
            <p>
              Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </p>
            <p>
              Price: <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
              <button onClick={() => {
                console.info('click')
                addProduct.mutate({name, price})
              }}>
                add
              </button>
            </p>
          </>
        ) : <p>Fetching...</p>
      }
      {error !==null && <p>{error.message}</p>}
    </div>
  );
}

export default App;

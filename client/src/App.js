import React, { useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('http://localhost:80/blogs').then((blog)=>console.log(blog)).catch(err=>console.log(err))
    // axios.post('http://localhost:80/blogs',{
    //   "title":"sabari",
    //   "subTitle":"hello",
    //   "description":"how are you"
    // }).then((blog)=>console.log(blog)).catch(err=>console.log(err))

    // axios.patch('http://localhost:80/blogs/64abe20af32c70f5ca5446dc',{
    //   "title":"sabari nathan"
    // }).then((blog)=>console.log(blog)).catch(err=>console.log(err))

    //axios.delete('http://localhost:80/blogs/64abe1f6f32c70f5ca5446d8').then((blog)=>console.log(blog)).catch(err=>console.log(err))
  
  }, [])

  
  return (
    <div>App</div>
  )
}

export default App
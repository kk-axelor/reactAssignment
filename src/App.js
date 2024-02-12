import React from 'react'
import { useGetPostsQuery } from './redux/myApi'

const App = () => {
  const { isError, isFetching, isLoading, isSuccess, error, data } = useGetPostsQuery()
  console.log(error)
  return (
    <div>{
      isSuccess ? <p>data find sucessfully</p> : <p>{error?.data}</p>
    }</div>
  )
}

export default App
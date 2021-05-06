import React from 'react'
import Layout from ".//components/Layout"
import {page} from ".//examples/home.module.css"

const index = () => {
  return (
    <Layout>
      <div className={page}>
      <h1 style={{color:"red"}}>Home Page</h1>
      <h2> Body </h2>
      </div>
    </Layout>
  )
}

export default index

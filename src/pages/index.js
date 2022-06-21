import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Hamza's Portfolio">
      <p>I'm making this for my portfolio using Gatsby. Here is a pic of poptart</p>
      <StaticImage
        alt="POP"
        src="../images/pop.jpg"
      />
    </Layout>
  )
}

export default IndexPage
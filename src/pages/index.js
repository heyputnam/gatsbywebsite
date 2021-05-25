import * as React from "react"
import Layout  from '../../components/layout'
import BigHero from '../../components/bighero'
import Packages from '../../components/packages'
import Testimonials from "../../components/testimonials"
import Reviews from '../../components/reviews'
import Contact from '../../components/contact'
import { ElfsightWidget } from 'react-elfsight-widget'

import { bighero, packages, testimonials, reviews, contact } from '../../components/layout'


const IndexPage = () => {
  return(
    <Layout company='Kayo Time Details'>
        <BigHero />
        <Packages />
        <Testimonials />
        <Reviews />
        <Contact/>
    </Layout>
  )
}

export default IndexPage

import * as React from "react"
import Layout  from '../../components/layout'
import BigHero from '../../components/bighero'
import Packages from '../../components/packages'
import Testimonials from "../../components/testimonials"
import Reviews from '../../components/reviews'
import Contact from '../../components/contact'

import { bighero, packages, testimonials, reviews, contact } from '../../components/layout'


const IndexPage = () => {
  return(
    <Layout company='Kayo Time'>
        <BigHero className={bighero}/>
        <Packages className={packages}/>
        <Testimonials className={testimonials}/>
        <Reviews className={reviews}/>
        <Contact className={contact}/>
    </Layout>
  )
}

export default IndexPage

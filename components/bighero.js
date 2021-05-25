
import * as React from 'react' 
import { heroContainer,
     superName } from '../components/bighero.module.css'
import fullpage from 'fullpage.js'

const BigHero = () => {
    return(
        <section className={heroContainer}>
           <h1 className={superName}>KAYO TIME DETAILS.</h1>
        </section>
    )
}

export default BigHero;
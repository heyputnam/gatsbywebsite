
import * as React from 'react' 
import {packageContainer, group} from '../components/package.module.css'

const Package = ({number, packageTitle, description, price}) => {
    return(
        <section className={packageContainer}>
            <section className={group}>
           <h2>{packageTitle}</h2>
           <p>{description}</p>
           <p>{price}</p>
           </section>
        </section>
    )
}

export default Package;
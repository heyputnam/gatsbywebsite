
import * as React from 'react' 
import Package from './package'


const Packages = ({packages, number}) => {
    return(
        <section className={packages} id='packages'>
            <Package number='1'/>
            <Package number='2'/>
            <Package number='2'/>
        </section>
        
    )
}

export default Packages;
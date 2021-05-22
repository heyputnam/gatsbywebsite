
import * as React from 'react' 
import Package from './package'


const Packages = ({packages, number}) => {
    return(
        <main className={packages}>
            <Package number='1'/>
            <Package number='2'/>
            <Package number='2'/>
        </main>
        
    )
}

export default Packages;
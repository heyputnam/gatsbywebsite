
import * as React from 'react' 
import Package from './package'
import { boxContainer, packageContainer, packageBox } from '../components/packages.modules.css'


const Packages = ({packages, number, packageTitle, description, price}) => {
    return(
        <section id='packages'>
            <section className={packageContainer}>
            <Package
             number='1' 
            packageTitle='Packge 1 title'
            description='this is the description of the package numbered one'
            price='$150'
             className={packageBox}/>
            </section>
            <Package 
            number='2' 
            packageTitle='Package 2 title'
            description='this is the description of the package numbered two'
            price='$200'/>
            <Package 
            number='3' 
            packageTitle='Package 3 title'
            description='this is the description of the package numbered three'
            price='$250'/>
           
        </section>
        
    )
}

export default Packages;
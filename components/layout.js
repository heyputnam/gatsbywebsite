import * as React from 'react' 
import { AnchorLink  } from 'gatsby-plugin-anchor-links' 
import { FiFacebook } from '@react-icons/all-files/fi/FiFacebook'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'
import { FiPhone } from '@react-icons/all-files/fi/FiPhone'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import {
     container,
     navLinks,
     navLinkItem,
     navLinkText,
     sectionContainer,
     bighero,
     packages,
     testimonials,
     reviews,
     contact,
     footer,
     footerContainer,
     copyright,
 } from '../components/layout.module.css'


const Layout = ({company, children}) => {
    return(
        <main className={container}>
            <title>{company}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <AnchorLink to='#packages'className={navLinkText}
                        title='packages'></AnchorLink>
                    </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='#testimonials' className={navLinkText} title='testimonials'> 
                        </AnchorLink>
                        </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='#reviews' className={navLinkText}title='reviews'></AnchorLink>
                        </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='#contact' className={navLinkText}title='contact'></AnchorLink>
                        </li>

                </ul>
            </nav>
            <div className={sectionContainer}>
            <section className={bighero}>
                {children.bighero}
            </section>
            <section className={packages} id='packages'>
        
            </section>
            <section className={testimonials} id='testimonials'>
            </section>
            <section className={reviews} id='reviews'>
            </section>
            <section className={contact} id='contact'>
                {children}
            </section>
            </div>
            <footer className={footer}>
                <section className={footerContainer}>
                <ul>
                    <li>
                    <FiFacebook />
                    </li>
                    <li>
                    <FiInstagram />
                    </li>
                    <li>
                    <FiPhone />
                    </li>
                    <li>
                    <FiMail />
                    </li>
                </ul>
                </section>
                <p className={copyright}>© {company}</p>    
            </footer>
        </main>
    )
}

export default Layout;
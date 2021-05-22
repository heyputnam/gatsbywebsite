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
                        <AnchorLink to='/index#packages'className={navLinkText}
                        title='packages'></AnchorLink>
                    </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='/index#testimonials' className={navLinkText} title='testimonials'> 
                        </AnchorLink>
                        </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='/index#reviews' className={navLinkText}title='reviews'></AnchorLink>
                        </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='/index#contact' className={navLinkText}title='contact'></AnchorLink>
                        </li>

                </ul>
            </nav>
            <section className={bighero}>
                {children}
            </section>
            <section className={packages} id='packages'>
                {children}
            </section>
            <section className={testimonials} id='testimonials'>
                {children}
            </section>
            <section className={reviews} id='reviews'>
                {children}
            </section>
            <section className={contact} id='contact'>
                {children}
            </section>
            <footer className={footer}>
                <div className={footerContainer}>
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
                <p className={copyright}>© {company}</p>
                     </div>
            </footer>
        </main>
    )
}

export default Layout;
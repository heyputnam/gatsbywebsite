
import * as React from 'react' 
import Review from '../components/review'
import { reviewsContainer } from '../components/reviews.module.css'

const Reviews = () => {
    return(
        <section className={reviewsContainer} id='reviews'>
            <Review />
            <Review />
            <Review />
        </section>
    )
}

export default Reviews;

import * as React from 'react' 
import Review from '../components/review'
import { ElfsightWidget } from 'react-elfsight-widget'
import { reviewsContainer } from '../components/reviews.module.css'


const Reviews = ({title, text}) => {
    return(
        <section className={reviewsContainer} id='reviews'>
            <h1>See what others have to say</h1>
            <ElfsightWidget widgetID="0a54b799-c158-4be9-bdd5-a25f73332f30" />
           
        </section>
    )
}

export default Reviews;


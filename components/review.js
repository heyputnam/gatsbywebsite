
import * as React from 'react' 
import { reviewTitle,
        reviewBody,
        reviewText,
        reviewImage,
        reviewContainer
        }
        from '../components/review.module.css'


const Review = ({title, text}) => {
    return(
        <main>
            <section className={reviewContainer}>
            <h4 className={reviewTitle}>{title}</h4>
            <section className={reviewBody}>
                <p className={reviewText}>{text}</p>
                <img className={reviewImage}></img>

            </section>
            </section>
        </main>
    )
}

export default Review;
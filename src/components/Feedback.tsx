import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

export default function Feedback() {

    // eassay-starts holds the review value give by the user to the essay rendered by our AI.
    const [ essayStars, setEssayStars ] = useState<number | null>(0);

    // site-starts holds the review value give by the user to our website, for the value it offers and the for the overall user experience.
    const [ siteStars, setSiteStars ] = useState<number | null>(0);

    // totalfeedbacks holds the value for total feedbacks user have to go through, and for the transtition to go from one feeback to another.
    const [ totalFeedbacks, setTotalFeedbacks ] = useState<number>(1);

    const [ userReviewButton, setUserReviewButton ] = useState<boolean>(false);

    // checkbothratings is a function that will check if the user has rated each rating a 5 stars or not.
    // if each rating is 5 stars, we can continue to get the feedback from our user.
    // if anyof the rating is not 5 stars, we will not continue for the feedback from our user.
    // this function is wrapped inside the usecallback hook to memoize the function which will help us skip unnecessary re-renders.
    const checkBothRatings = useCallback(() => {
        if(essayStars === 5 && siteStars === 5) {
            // inside this statement, we need to ask the user to write a review because at this point, both ratins are 5 stars.
            setUserReviewButton(true);
            return true;
        } else {
            // inside this statement, we do not ask the user for a reivew, reason being, one or both ratings are not 5 stars.
            return false;
        }
    }, [essayStars, siteStars]);

    useEffect(() => {
        checkBothRatings();
    }, [checkBothRatings]);
    
    // this function takes care of rendering the JSX for feedback, instead of putting all the logic inside return , we did 
    // it in a function so that the returned JSX of the component looks clean.
    const renderFeedback = (totalFeedbacks: number): any => {
        return (
            <> 
            {
                // here we check if the value from totalfeedbacks is 1, we then render the first feedback section user has to go through.
                // also in order to see the second feedback section, user has to go through the first one.
                totalFeedbacks === 1
                ?
                <div className="feedback-section">
                    <p>How do you like the essay?</p>
                        <div>
                            <Rating
                                name="simple-controlled"
                                value={essayStars}
                                onChange={(event, newValue) => {
                                    setEssayStars(newValue);
                                    setTotalFeedbacks(prevState => prevState + 1);
                                }}
                            />
                        </div>
                    <p>{ totalFeedbacks } / 2</p>
                </div>
                :
                null
            }

            {
                // here we check if the value from totalfeedbacks is 2, we then render the second feedback section user has to go through. 
                totalFeedbacks === 2
                ?
                <div className="feedback-section">
                    <p>How do you like the site?</p>
                    <div>
                        <Rating
                            name="simple-controlled"
                            value={siteStars}
                            onChange={(event, newValue) => {
                                setSiteStars(newValue);
                            }}
                        />
                    </div>
                    <p>{ totalFeedbacks } / 2</p>
                </div>
                :
                null
            }
            </>
        );
    };

    // this is the function you will be working with, when we hit this function, it means the user has rated 5 stars both the AI generated essay and the site.
    // you need to integrate a 3rd party website for reviews, so that a user can leave us a review.
    // you can use any 3rd party website you wish for the purpose, for instance you can use Trustpilot or Hotjar.
    const leaveUsReview = (): void => {
        window.confirm("Please leave us a review!");
    }

    return (
        <>
            { renderFeedback(totalFeedbacks) }

            { userReviewButton ? 
                <div className="button-outer" onClick={leaveUsReview}>
                    <button className="review-button">Leave us a review</button>
                </div>
                : null
            } 
        </>
    )
}
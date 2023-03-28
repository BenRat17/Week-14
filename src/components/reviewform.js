import React from 'react';
import { useState } from 'react';
import Review from './reviewlist';
import StarRating from './stars';

const ReviewForm = (props) => {
    const [review, setReview] = useState(''); 
    const [reviewList, setreviewList] = useState([]) 
    const handleChange = (e) => {
        setReview(e.target.value)
    }
    const handleEvent = () => {
        setReview([])
        setreviewList([...reviewList, review])
    }

    function handleDelete(id) {
        const reviewCopy = [...reviewList]
        reviewCopy.splice(id, 1);
        setreviewList(reviewCopy);
    };
    return (
        <>
            <StarRating></StarRating>
            <input type="text" className="form mt-3" onChange={handleChange} value={review} ></input>
            <button className="btn btn-primary m-5" onClick={handleEvent}>Write a review!</button>

            {reviewList.map((review, id) => (
                <li className="list" key={id}>
                    {review}
                    <button className='btn btn-danger btn-sm ms-5' id={id} onClick={() => handleDelete(id)} >
                        X
                    </button>
                </li>
            ))}
        </>
    );
};

export default ReviewForm;
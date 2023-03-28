import React from 'react';
import Movie1 from '../movie1.jpeg';
import Movie2 from '../movie2.jpeg';
import Movie3 from '../movie3.jpeg';
import Movie4 from '../movie4.jpeg';
import Reviewform from './reviewform';
import StarRating from './stars';
import Form from './reviewform';
import Review from './reviewlist';
export default function movies() {
    return(
        <div className="grid text-center">
        <div className="row">
          <div className="g-col-4">
            <img src={Movie1} alt='Avengers:Endgame'></img>
            <Form></Form>
          </div>
          <div className="g-col-4">
          <img src={Movie2} alt='The Mummy'></img>
          <Form></Form>
          </div>
        </div>
        <div className="row">
        <div className="g-col-4">
        <img src={Movie3} alt='The Lord of the Rings'></img>
        <Form></Form>
          </div>
          <div className="g-col-4">
          <img src={Movie4} alt='Tangled'></img>
          <Form></Form>
          </div>
        </div>
      </div>
    )
}
import React, { Fragment, useState, useEffect } from 'react';
// styled compoents
import { CardsImages, IconPlus, Image } from '../../styles/Home/cards';
// redux
import{ useSelector } from 'react-redux';
import Response from './Response';
// components


function Cards() {
  const [images, setImages] = useState([]);
  // redux
  const auth = useSelector(state =>  state.auth.value);
  // algorithm for get random date image.  
  const movies = ["tree", "forest", "computer", "neon", "guitar", 'cars', 'new york'];
  const randomMovie = [];
  const getApiInfo = async randomMovies => {
    const info = await fetch(`https://api.unsplash.com/search/photos?client_id=57YqoVxkm2c-SB58C2OwRUB0y1jDlFVs5WqfLKHR-JE&page=1&per_page=3&query=${randomMovies}`)
    const res = await info.json();
    setImages(res.results)
  }
  useEffect(() => {
    const item = movies[Math.floor(Math.random()*movies.length )];
    randomMovie.push(item);
    getApiInfo(randomMovie);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const [response, setresponse] = useState([]);
  const addImageToDB = async elem => {
    const item = images.filter(el => el.id === elem);
    const newImage = await fetch('http://imagesfredvel.herokuapp.com/api/images/add', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "access-token": auth.token
      },
      body: JSON.stringify({
        imageUrl: item[0].urls.small
      })
    })
    const res = await newImage.json();
    setresponse(res);
  }
  return(
    <Fragment>
      <CardsImages>
        {images ?
          images.map((item, index) => (
            <Image >
              <img src={item.urls.regular} alt="" width={150} key={index} />
              <IconPlus onClick={() => addImageToDB(item.id)}/>
            </Image>
          ) )   
        : null }
      </CardsImages>
      <Response state={response} setState={setresponse} />
    </Fragment>
  )
}

export default Cards;
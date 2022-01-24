import React, { useEffect, useState } from 'react';
// react redux
import { useSelector } from 'react-redux';

function User() {
  const auth = useSelector(state => state.auth.value);
  const [user, setUser] = useState([]);
  const [images, setImages] = useState([]);
  const getInfoUser = async (_token) => {
    const info = await fetch('http://imagesfredvel.herokuapp.com/api/users/user', {
      method: 'get',
      headers: {
        'access-token': _token
      }
    });
    const res = await info.json();
    setUser(res);
  }
  // code to get images by user
  const getImagesByUser = async _token => {
    const img = await fetch('http://imagesfredvel.herokuapp.com/api/images/byuser' , {
      method: 'get',
      headers: {
        'access-token': _token
      }
    } )
    const res = await img.json();
    setImages(res);
    console.log(images);
  }
  useEffect(() => {
    getInfoUser(auth.token);
    getImagesByUser(auth.token);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <div>
      this will be the user.
      <h3> { user.name } </h3>
      <h3> { user.email } </h3>
      <button onClick={() => console.log(images) } >images</button>
      {
        images && images.length >= 1 ?
        images.map(item => (
          <img src={item.imageUrl} alt="" width={150} />
        )) 
      : <h3>You have no images added yet</h3> }
    </div>
  );
}

export default User;

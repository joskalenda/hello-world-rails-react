import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from '../redux/message/api';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchmessage()(dispatch);
  }, []);
  const message = useSelector((state) => state.messageReducer);

  const handleClick = () => {
    dispatch(fetchmessage());
  };
  return (
    <div>
      <h1>Greeting</h1>
      <div>
        Message:
        {' '}
        {/* {message.message} */}
      </div>
      <button type="button" onClick={handleClick}>Next greet</button>
    </div>
  );
};

export default Greeting;
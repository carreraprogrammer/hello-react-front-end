import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/slice';
import './Greeting.css'; // Import your CSS stylesheet

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const handleFetchGreeting = () => {
    dispatch(fetchGreetings());
  };

  return (
    <div id="greeting-container" className="greeting-container">
      {greeting.loading && <div className="loading-message">Loading...</div>}
      {!greeting.loading && greeting.error ? (
        <div className="error-message">
          Error:
          {' '}
          {greeting.error}
        </div>
      ) : null}
      {!greeting.loading && greeting.greeting ? (
        <div className="greeting-message">
          <h1>{greeting.greeting}</h1>
        </div>
      ) : null}
      <button type="button"  className="fetch-button" onClick={handleFetchGreeting}>
        Change Message
      </button>
    </div>
  );
};

export default Greeting;

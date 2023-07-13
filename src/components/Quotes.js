/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import QUOTES_API from '../util/fetchAPI';

function DisplayQuotes() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(QUOTES_API, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'xPGkbZwR3P+7JQcvJeRqHA==SHtlGkR1v3cEpAw2',
        },
        contentType: 'application/json',
      });
      const quotes = await response.json();
      console.log(quotes);
      setData(quotes);
    } catch (error) {
      console.log(error);
      setError(error);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);
  if (loading) return <div><h2>Loading.....</h2></div>;
  if (error) return <div><p>{error}</p></div>;
  return (
    <div>
      {data.map((item, index) => (
        <div key={1} className="quotes">
          <h4>{item.quote}</h4>
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayQuotes;

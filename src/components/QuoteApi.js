import React, { useState, useEffect } from 'react';

function Quote() {
  const [quotes, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorPresent, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes/', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'SxVyw4SCwQ8g6rx2kEDbkA==vs1eTXQwIMNugbr1',
          },
        });
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error('Error fetching data', error);
        setError(true);
      }
      setIsLoading(false);
    };

    fetchQuote();

    // Clean up when component unmounts
    return () => {
      console.log('Quote Clean up!');
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (errorPresent) return <div>Sorry, Try again!</div>;

  return (
    <div className="quoteSec">
      {quotes.map((quote) => (
        <div className="quote" key={quote.id}>
          {quote.quote}
        </div>
      ))}
    </div>
  );
}

export default Quote;

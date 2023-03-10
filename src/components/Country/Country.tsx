import React, { useState } from 'react';
import './Country.scss';
interface ICountryProps {
  captial: string;
  country: string;

  hidden: boolean;

  sendToAtlas: () => any;
}

export const Country = (props: ICountryProps) => {
  const { captial, country, sendToAtlas, hidden } = props;

  const [isHidden, setIsHidden] = useState<boolean>(true);

  const abcCountry = () => {
    if (isHidden) {
      return (
        <div
          style={{ border: '1px solid red' }}
          onClick={() => setIsHidden(false)}
        >
          HIDDEN COUNTRY
        </div>
      );
    }
    return (
      <div className='forecast'>
        <div>{captial}</div>
        <div>{country}</div>
        <button onClick={sendToAtlas}>Send to Atlas</button>
      </div>
    );
  };

  return <div>{abcCountry()}</div>;
};

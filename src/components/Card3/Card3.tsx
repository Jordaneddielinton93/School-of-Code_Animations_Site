import Card3Css from './Card3.module.css';

import React from 'react';
export function Card3({
  size,
  text,
  border,
  backgroundcolor,
  image1,
  image2,
  image3,
  image4,
}: any) {
  let heightStyle: any = {
    height: size ? size : '400px',
    width: size ? size : '400px',
    border: border,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  };

  let image =
    'https://images.unsplash.com/photo-1544273677-c433136021d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnQlMjB0ZXh0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60';

  return (
    <div style={heightStyle}>
      <div
        className={Card3Css.C3card1}
        style={{ border: `solid black ${border}`, background: backgroundcolor }}
      >
        <p>{text}</p>
        <div
          className={Card3Css.C3card2}
          style={{
            border: `solid black ${border}`,
            background: backgroundcolor,
          }}
        >
          <img alt="slideimg" srcSet={!image1 ? image : ''} />
        </div>

        <div
          className={Card3Css.C3card3}
          style={{
            border: `solid black ${border}`,
            background: backgroundcolor,
          }}
        >
          <img alt="slideimg" srcSet={!image2 ? image : ''} />
        </div>

        <div
          className={Card3Css.C3card4}
          style={{
            border: `solid black ${border}`,
            background: backgroundcolor,
          }}
        >
          <img alt="slideimg" srcSet={!image3 ? image : ''} />
        </div>

        <div
          className={Card3Css.C3card5}
          style={{
            border: `solid black ${border}`,
            background: backgroundcolor,
          }}
        >
          <img alt="slideimg" srcSet={!image4 ? image : ''} />
        </div>
      </div>
    </div>
  );
}

import Card2Css from './Card2.module.css';

import React from 'react';
export function Card2({
  size,
  text,
  border,
  backgroundcolor,
  image1,
  image2,
}: any) {
  let heightStyle: any = {
    height: size ? size : '400px',
    width: size ? size : '400px',
    border: border,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    transition: '1s',
  };

  let image =
    'https://images.unsplash.com/photo-1544273677-c433136021d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnQlMjB0ZXh0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60';

  return (
    <div style={heightStyle}>
      <div className={Card2Css.C2card}>
        <div
          className={Card2Css.C2card1}
          style={{
            border: `solid black ${border}`,
            background: backgroundcolor,
          }}
        >
          <p>{text}</p>
        </div>
        <div
          className={Card2Css.C2card2}
          style={{
            border: `solid black ${border}`,
            background: backgroundcolor,
          }}
        >
          <img alt="slideimg" srcSet={!image1 ? image : ''} />
        </div>

        <div
          className={Card2Css.C2card3}
          style={{
            border: `solid black ${border}`,
            background: backgroundcolor,
          }}
        >
          <img alt="slideimg" srcSet={!image2 ? image : ''} />
        </div>
      </div>
    </div>
  );
}

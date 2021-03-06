import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { useResponsive } from 'hooks';
import { BreakPoints } from 'config';

const TypingTitle = ({
  titles = [],
  speed = 50,
  loop = true,
  style = {},
} = {}) => {
  const isnotMobile = useResponsive({ minWidth: BreakPoints.laptop });
  const fontSize = isnotMobile ? '5em' : '2em';

  useEffect(() => {
    const options = {
      strings: [...titles],
      smartBackspace: true,
      typeSpeed: speed,
      backSpeed: speed,
      backDelay: 1000,
      loop,
    };

    const typed = new Typed('.typing-title', options);

    return () => {
      typed.destroy();
    };
  }, [titles, speed, loop]);

  return (
    <div
      className="typing-title-container"
      style={{
        width: '100%',
        height: '100%',
        marginTop: 0,
        paddingTop: 0,
        fontSize,
        fontWeight: 800,
        textAlign: 'center',
        ...style,
      }}
    >
      <span className="typing-title" />
    </div>
  );
};

export default TypingTitle;

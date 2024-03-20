import { useState } from "react";
import "./index.css";

const Letter = (props) => {
  const { next } = props;
  const [animation, setAnimation] = useState(false);

  const handleClick = () => {
    setAnimation(true);
    setTimeout(() => {
      next();
    }, 1200);
  };

  return (
    <>
      <button className={`letter-image`} onClick={handleClick}>
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-context-body">
              <p>
                <strong>
                  Dear,
                  <br />
                  여러분
                </strong>
                <br /> 이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를
                돌면서...
              </p>
            </div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </button>
      {animation && (
        <>
          <div className="red" />
          <div className="orange" />
          <div className="yellow" />
          <div className="green" />
          <div className="blue" />
          <div className="purple" />
        </>
      )}
    </>
  );
};

export default Letter;

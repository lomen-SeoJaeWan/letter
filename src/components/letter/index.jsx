import "./index.css";

const Letter = () => {
  return (
    <div className={`letter-image`}>
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
    </div>
  );
};

export default Letter;

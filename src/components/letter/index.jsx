import "./index.css";

const Letter = () => {
  return (
    <div class="letter-image">
      <div class="animated-mail">
        <div class="back-fold"></div>
        <div class="letter">
          <div class="letter-border"></div>
          <div class="letter-title"></div>
          <div class="letter-context"></div>
          <div class="letter-context-body">
            <p>
              <strong>
                Dear,
                <br />
                Ram Avtar
              </strong>
              <br /> you are invited BPCON 2023
            </p>
          </div>
          <div class="letter-stamp">
            <div class="letter-stamp-inner"></div>
          </div>
        </div>
        <div class="top-fold"></div>
        <div class="body"></div>
        <div class="left-fold"></div>
      </div>
      <div class="shadow"></div>
    </div>
  );
};

export default Letter;

import Date from "../date";
import Firework from "../firework";
import Meeting from "../meeting";
import "./index.css";

const Main = () => {
  return (
    <>
      <div className="contents">
        <img
          className="first-image"
          src="https://github.com/lomen-SeoJaeWan/letter/blob/main/public/assets/first.png"
        />
        <img
          className="second-image"
          src="https://github.com/lomen-SeoJaeWan/letter/blob/main/public/assets/second.png"
        />

        <p className="rainbow">아무튼 서재완 생일 초대장</p>
      </div>

      <img
        className="bonobono-image"
        src="https://github.com/lomen-SeoJaeWan/letter/blob/main/public/assets/bonobono.png"
      />

      <Date />
      <Meeting />
      <Firework />
    </>
  );
};

export default Main;

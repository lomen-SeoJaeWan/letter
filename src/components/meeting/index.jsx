import "./index.css";

const Meeting = () => {
  return (
    <div className="meeting-box">
      <p className="meeting-title">장소 ( 지도를 클릭하세오 )</p>

      <a
        href="https://map.naver.com/p/entry/place/1138941201?lng=128.6114619&lat=35.8652762&placePath=%2Fhome&searchType=place&c=17.70,0,0,0,dh"
        target="_blank"
      >
        <img className="meeting" src="/assets/meeting.PNG" />
      </a>
    </div>
  );
};

export default Meeting;

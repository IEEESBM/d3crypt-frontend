import RanksBox from "./components/RanksBox";
import "./Ranks.css";

function Ranks() {
  return (
    <>
      <div className="ranks-container">
        <RanksBox
          bgc="#6D6D6D"
          w="16.875vw"
          h="11.25vw"
          topp="17.708vw"
          leftp="26.875vw"
          pos="2"
          suffix="nd"
          top_pic="-2vw"
          sizee="5.277vw"
          topn="3.25vw"
          topb="7.791vw"
        />
        <RanksBox
          bgc="#675117"
          w="16.875vw"
          h="9.375vw"
          topp="19.583vw"
          leftp="60.277vw"
          pos="3"
          suffix="rd"
          top_pic="-2vw"
          sizee="3.47vw"
          topn="1.55vw"
          topb="5.916vw"
        />
        <RanksBox
          bgc="#BF8A00"
          bxs="0px 0px 13px rgba(180, 180, 180, 0.1)"
          w="20.94vw"
          h="14.79vw"
          topp="14.16vw"
          leftp="41.11vw"
          pos="1"
          suffix="st"
          top_pic="-2vw"
          sizee="7.08vw"
          topn="5.416vw"
          topb="11.33vw"
        />
      </div>
    </>
  );
}

export default Ranks;

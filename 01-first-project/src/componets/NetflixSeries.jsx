import seriesData from "../Api/seriesData.json"
import  {SeriesCard}  from "./SeriesCard";

const NetflixSeries = () => {

  return (  
    <ul className="grid grid-three-colos">
      {seriesData.map((curElem) => {
      return <SeriesCard key ={curElem.id} curElem={curElem}/>;
    })}
  </ul>
  );
};

export default NetflixSeries



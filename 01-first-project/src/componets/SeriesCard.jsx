
export const SeriesCard = (props) => {

  const { img_url, name, rating, description, genre, watch_url } = props.curElem;
  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>

      <div className="card-content">
        <h1>Name:{name}</h1>

        <h3>Rating:<span className={`rating ${rating >= 8.5 ? "super" : "averege"}`}>
        {rating}</span>
        </h3>
        <p>Summery: {description}</p>
        <p>Genre:{genre}</p>
        <a href={watch_url} target="_blank">
          <button
            style={{
              padding: "1.2rem 2.4rem",
              border: "none",
              fontSize: "1.6rem",
              backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
              color: "white",
              fontWeight:"bold",
            cursor:"pointer"
            }}
          >watch now</button>
        </a>
      </div>

    </li>
  );
};

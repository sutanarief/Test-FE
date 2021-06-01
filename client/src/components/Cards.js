import React from "react";

const Cards = ({ data }) => {
  const replaceUrl = () => {
    data.imageUrl =
      "https://www.nccer.org/images/default-source/icons/default-event-thumb.jpg?sfvrsn=2ceb314f_2";
  };
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={data.imageUrl}
        className="card-img-top"
        style={{ maxHeight: "12rem", objectFit: "cover" }}
        alt="image"
        onError={replaceUrl()}
      />
      <div className="card-body">
        <h6>{data.location}</h6>
        <h5 className="card-title">{data.title}</h5>
        <h6 className="card-title">
          {new Date(data.date).getDate()}{" "}
          {new Date(data.date).toLocaleDateString("id", {
            month: "long",
          })}{" "}
          {new Date(data.date).getFullYear()}
        </h6>
        <hr />
        <div className="d-flex">
          {data.participant.map((val, i) => {
            return (
              <div className="d-flex me-2" key="i">
                <img
                  src="https://image.pngaaa.com/159/3782159-middle.png"
                  alt="person"
                  style={{ maxHeight: "24px" }}
                ></img>
                <div className="ms-2">{val}</div>
              </div>
            );
          })}
        </div>
        <hr />
        <p
          className="card-text"
          style={{
            overflow: "hidden",
            maxHeight: "5rem",
            textOverflow: "elipsis",
            wordWrap: "break-word",
            whiteSpace: "no-wrap",
          }}
        >
          <b>Note:</b> {data.note}
        </p>
      </div>
    </div>
  );
};

export default Cards;

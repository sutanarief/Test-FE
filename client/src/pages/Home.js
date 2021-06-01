import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvent } from "../store";
import Cards from "../components/Cards";

const Home = () => {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvent());
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {events.map((val, i) => (
        <Cards data={val} />
      ))}
    </div>
  );
};

export default Home;

import React from "react";
import "./styles.scss";
import Calendar from "../Calendar/Calendar";
import moment from "moment";
import { Modal } from "../Modal/Modal";
import {useSelector} from 'react-redux'
const Home = () => {
  const onSelect = (date, previousDate, currentMonth) => {
    if (moment(date).isSame(previousDate)) {
      return false;
    } else if (currentMonth.isSame(date, "month")) {
      return true;
    }
  };
  const state = useSelector((state) => state);
  return (
    <>
      <section className="home">
        <div className="home-pic-block">
          <img
            className="home-img"
            alt="coffee-img"
            src="https://am3pap007files.storage.live.com/y4mRR8nM4hcGyFt9nwEYDmG-kAtYxADPHhHWz-Kd31w7HSO8qIT9BaUE_QB4beSQJCvbvfWCsFpYE_r3J_oJIMguqvtvvWIDmc4w27XozDgvyJQB2wedMcyfqKtbS7G_JjVBkLh9_hnowp28tsp4ZsxT0Nr0rcjbPfsIxBEXJ5HdUv9xNyy3ZiXDkO_avK2YUaskRA0xu4KP9tO5QNNl9wKeQ/Untitled-1Artboard%201%20copy.jpg?psid=1&width=1477&height=831"
          />
          <h1 className="home-title">choose the day for the meeting</h1>
          <p className="home-subtitle">
            We encourage you to book your appointment online. This will save you
            time.
          </p>
        </div>
        <div className="home-cal-pic">
          <Calendar
            date={moment("15/09/2020", "DD/MM/YYYY")}
            onSelect={onSelect}
          />
        </div>
      </section>
      <Modal day={state.currentDay} week={state.currentWeek} month={state.currentMonth} />
    </>
  );
};


export default  Home;

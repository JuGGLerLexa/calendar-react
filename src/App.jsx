import React, { useState } from "react";
import moment from "moment";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import Modal from "./components/modal/Modal";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [hidenModal, setHidenModal] = useState();
  const [changeEvent, setChangeEvent] = useState({
    date: moment().format("YYYY-MM-DD"),
    startTime: moment().format("hh:mm"),
    endTime: moment().add(1, "hour").format("hh:mm"),
    dateFrom: moment().format("YYYY-MM-DD") + " " + moment().format("HH:mm"),
    dateTo:
      moment().format("YYYY-MM-DD") +
      " " +
      moment().add(1, "hour").format("HH:mm"),
  });

  const newValue = (newDate) =>
    setChangeEvent({
      date: moment(newDate).format("YYYY-MM-DD"),
      startTime: moment(newDate).format("HH:mm"),
      endTime: moment(newDate).add(1, "hour").format("HH:mm"),
      dateFrom:
        moment(newDate).format("YYYY-MM-DD") +
        " " +
        moment(newDate).format("HH:mm"),
      dateTo:
        moment(newDate).format("YYYY-MM-DD") +
        " " +
        moment(newDate).add(1, "hour").format("HH:mm"),
    });

  const hiden = () => {
    setHidenModal(!hidenModal);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header hiden={hiden} />
      <Modal setChangeEvent={setChangeEvent} changeEvent={changeEvent} />
      <Calendar
        weekDates={weekDates}
        newValue={newValue}
        setHidenModal={setHidenModal}
      />
    </>
  );
};

export default App;

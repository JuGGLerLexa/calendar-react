import React, { useState } from "react";
import moment from "moment";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import Modal from "./components/modal/Modal";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
};

// const weekDates = { weekStartDate };
const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

return (
  <>
    <Header />
    <Modal />
    <Calendar weekDates={weekDates} />
  </>
);

export default App;

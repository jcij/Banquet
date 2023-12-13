import { useEffect } from "react";
// library
import {
  Grid,
  Container,
  Typography,
  Card,
  CardHeader,
  Box,
} from "@mui/material";
import { Outlet } from "react-router-dom";
// components
import Page from "src/components/Page.js";
import { CustomBackdrop } from "src/components";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

export default function DashboardApp() {
  const [USD, setTotalUSD] = useState(0);
  const [Euro, setTotalEuro] = useState(0);
  const [GBP, setTotalGBP] = useState(0);
  const [loading, setLoading] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    console.log("jjj", allEvents.length);
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        console.log("alert", allEvents.length);
        alert("CLASH");
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
  }
  const fetchPortfolio = async () => {
    try {
      // setLoading(true);

      // const response = await getMethod(API_URL.GET_PORTFOLIO, false, false);
      // setLoading(false);
      // if (response?.status === API_STATUS_CODE.SUCCESS) {
      //   setTotalUSD(response?.data?.result);
      // }
      setTotalUSD(0);
      setTotalEuro(0);
      setTotalGBP(0);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      fetchPortfolio();
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const EventComponent = (event) => {
    console.log(event);
    return (
      <>
        <Box className="g-custom-event">
          <Box>{event?.title}</Box>
          <Box className="g-time">
            {moment(event?.event.start).format("DD/MM/yyyy")}:
            {moment(event?.event.end).format("DD/MM/yyyy")}
          </Box>
          {/* {Array.isArray(event?.event?.WorkersInfo) &&
            event?.event?.WorkersInfo?.map((x, i) => (
              <Box key={i + x?.WorkerId}>
                <Box key={x.WorkerId + i}>{x?.WorkerName}</Box>
                <Box className="g-time">
                  {moment(event?.event.start).format("HH:mm")}:
                  {moment(event?.event.end).format("HH:mm")}
                </Box>
              </Box>
            ))} */}
        </Box>
      </>
    );
  };
  return (
    <>
      <CustomBackdrop loading={loading}>
        <Outlet />
        <Page title="Dashboard | Admin">
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1>Calendar</h1>
                <h2>Add New Event</h2>
              </Grid>
              <Grid item xs={12}>
                <input
                  type="text"
                  placeholder="Add Title"
                  style={{ width: "20%", marginRight: "10px" }}
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />

                <div>
                  <DatePicker
                    placeholderText="Start Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                  />
                  <DatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                  />
                  <button
                    stlye={{ marginTop: "10px" }}
                    onClick={handleAddEvent}
                  >
                    Add Event
                  </button>
                </div>
              </Grid>

              <Grid item xs={12}>
                <Calendar
                  components={{
                    event: EventComponent,
                  }}
                  className="grieger-rbc common"
                  localizer={localizer}
                  events={allEvents}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500, margin: "50px" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Page>
      </CustomBackdrop>
    </>
  );
}

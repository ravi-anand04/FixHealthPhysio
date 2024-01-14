// Patient.js
import { Button, Card, Dropdown, Tabs } from "flowbite-react";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useEffect, useState } from "react";
import { dates, physios } from "../constant";

// Function to generate an array of time objects
const generateTimeArray = (start, end) => {
  const startTime = new Date();
  startTime.setHours(start, 0, 0, 0); // Set start time to 8:00 am

  const endTime = new Date();
  endTime.setHours(end, 0, 0, 0); // Set end time to 12:00 pm

  const timeArray = [];

  // Loop through the time intervals with a 15-minute gap
  for (
    let currentTime = startTime;
    currentTime < endTime;
    currentTime.setMinutes(currentTime.getMinutes() + 15)
  ) {
    // Format the time as a string (12-hour clock with AM/PM)
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    // Create an object with the formatted time
    const timeObject = { time: formattedTime };

    // Add the object to the array
    timeArray.push(timeObject);
  }

  return timeArray;
};

const Patient = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPhysio, setSelectedPhysio] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {}, [selectedDate]);

  const [slots, setSlots] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });

  const handleClick = (date) => {
    setSelectedDate(date);
  };

  const changePhysio = (name) => {
    const currentPhysio = physios.find((physio) => physio.name === name);
    const currentPhysioSlots = currentPhysio.slots.find(
      (slot) => slot.date === selectedDate
    );
    console.log("William slots", currentPhysioSlots);

    const start = currentPhysioSlots.start;
    const end = currentPhysioSlots.end;

    let morningSlots = [];
    let afternoonSlots = [];
    let eveningSlots = [];

    if (start < 12) {
      if (end <= 12) {
        morningSlots = generateTimeArray(start, end);
        afternoonSlots = [];
        eveningSlots = [];
      } else if (end <= 15) {
        morningSlots = generateTimeArray(start, 12);
        afternoonSlots = generateTimeArray(12, end);
        eveningSlots = [];
      } else {
        morningSlots = generateTimeArray(start, 12);
        afternoonSlots = generateTimeArray(12, 15);
        eveningSlots = generateTimeArray(15, end);
      }
    } else if (start < 15) {
      if (end <= 15) {
        morningSlots = [];
        afternoonSlots = generateTimeArray(start, end);
        eveningSlots = [];
      } else {
        morningSlots = [];
        afternoonSlots = generateTimeArray(start, 15);
        eveningSlots = generateTimeArray(15, end);
      }
    } else {
      morningSlots = [];
      afternoonSlots = [];
      eveningSlots = generateTimeArray(start, end);
    }

    console.log("Morning", morningSlots);
    console.log("afternoon", afternoonSlots);
    console.log("evening", eveningSlots);

    setSlots({
      morning: morningSlots,
      afternoon: afternoonSlots,
      evening: eveningSlots,
    });
    setSelectedPhysio(name);
  };

  return (
    <div className="px-48 max-lg:px-12 mt-6">
      <h2 className="text-2xl font-bold mb-8">Operations Team View</h2>
      {/* <h1 className="text-lg text-center font-semibold">
        Book your Physio appointments
      </h1> */}
      <h1 className="font-semibold text-xl my-6">Select Date & Time</h1>
      <div className="day-select">
        <SwiperComponent
          slidesPerView={1}
          spaceBetween={16}
          rewind={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
          // navigation="true"
          modules={[Pagination, Navigation, Autoplay]}
          className="flex justify-center"
        >
          {dates.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Card
                href="#"
                className={`w-sm cursor-pointer ${
                  selectedDate === item.date
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                    : "bg-white"
                }`}
                onClick={() => handleClick(item.date)}
              >
                <h5
                  className={`${
                    selectedDate === item.date ? "text-white" : "text-black"
                  } text-md text-center font-semibold tracking-tight text-gray-900  `}
                >
                  {item.date}
                </h5>
              </Card>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
      <div className="select-employee mt-6">
        
        <Dropdown
          label={selectedPhysio ? selectedPhysio : "Select Physio"}
          // dismissOnClick={false}
          color="gray"
        >
          {physios.map((physio) => (
            <Dropdown.Item
              key={physio.id}
              value={physio.name}
              onClick={() => changePhysio(physio.name)}
            >
              {physio.name}
            </Dropdown.Item>
          ))}
        </Dropdown>
        {!selectedDate && (<h1 className="text-red-500 text-sm font-semibold mt-2 ml-4">Select date first</h1>)}  
      </div>
      {selectedPhysio && (
        <div className="slots mt-12">
          <Tabs
            aria-label="Default tabs"
            style="default"
            className="flex justify-evenly"
          >
            <Tabs.Item title="Consultation Slot">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => setTimeOfDay("morning")}
                  className={`${
                    timeOfDay === "morning"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-white text-black"
                  }  hover:opacity-90 px-12`}
                  color="light"
                >
                  Morning
                </Button>
                <Button
                  onClick={() => setTimeOfDay("afternoon")}
                  className={`${
                    timeOfDay === "afternoon"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-white text-black"
                  }  hover:opacity-90 px-12`}
                  color="light"
                >
                  Afternoon
                </Button>
                <Button
                  onClick={() => setTimeOfDay("evening")}
                  className={`${
                    timeOfDay === "evening"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-white text-black"
                  }  hover:opacity-90 px-12`}
                  color="light"
                >
                  Evening
                </Button>
              </div>
              <div className="slots">
                <div className="morning-slots flex flex-wrap justify-center gap-2 mt-8">
                  {timeOfDay === "morning" && slots.morning == [] ? (
                    <h1>Sorry, No slots available !</h1>
                  ) : (
                    slots.morning.map((slot) => (
                      <Button
                        className={`${
                          selectedTime === slot.time
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90"
                            : "bg-white text-black border-black-500 hover:bg-stone-400"
                        }`}
                        color="light"
                        onClick={() => setSelectedTime(slot.time)}
                      >
                        {slot.time}
                      </Button>
                    ))
                  )}
                  {/* {timeOfDay === "afternoon" && slots.afternoon == [] ? (
                    <h1>Sorry, No slots available !</h1>
                  ) : (
                    slots.afternoon.map((slot) => (
                      <Button
                        className={`${
                          selectedTime === slot.time
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90"
                            : "bg-white text-black border-black-500 hover:bg-stone-400"
                        }`}
                        onClick={() => setSelectedTime(slot.time)}
                        color="light"
                      >
                        {slot.time}
                      </Button>
                    ))
                  )}
                  {timeOfDay === "evening" && slots.evening == [] ? (
                    <h1>Sorry, No slots available !</h1>
                  ) : (
                    slots.evening.map((slot) => (
                      <Button
                        className={` hover:bg-red ${
                          selectedTime === slot.time
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-20"
                            : "bg-white text-black border-black-500"
                        }`}
                        onClick={() => setSelectedTime(slot.time)}
                        color="light"
                      >
                        {slot.time}
                      </Button>
                    ))
                  )} */}
                </div>
                {selectedTime && (
                  <div className="flex justify-center mt-6">
                    <Button
                      gradientMonochrome="success"
                      onClick={() => setConfirmed(true)}
                    >
                      Confirm
                    </Button>
                  </div>
                )}
              </div>
            </Tabs.Item>
            <Tabs.Item disabled={!confirmed} active={confirmed} title="Remarks">
              Disabled content
            </Tabs.Item>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Patient;

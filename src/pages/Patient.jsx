// Patient.js
import { Button, Card, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useState } from "react";
import { dates } from "../constant";

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

const morningSlots = generateTimeArray(8, 12);
const afternoonSlots = generateTimeArray(12, 15);
const eveningSlots = generateTimeArray(15, 17);

// console.log(morningSlots);
// console.log(afternoonSlots);
// console.log(eveningSlots);

// PATIENT VIEW CODE

const Patient = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  const handleClick = (index) => {
    setSelectedDate(index);
  };

  return (
    <div className="px-48 max-lg:px-12 mt-6">
      <h2 className="text-2xl font-bold mb-8">Patient View</h2>
      <h1 className="text-lg text-center font-semibold">
        Book your Physio appointments
      </h1>
      <h1 className="font-semibold my-6">Select Date & Time</h1>
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
                  selectedDate === index
                    ? "bg-gradient-to-r from-indigo-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleClick(index)}
              >
                <h5
                  className={`text-md text-center font-semibold tracking-tight text-gray-900  `}
                >
                  {item.date}
                </h5>
              </Card>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
      <div className="progress mt-12">
        <Tabs
          aria-label="Default tabs"
          style="default"
          className="flex justify-around"
        >
          <Tabs.Item active title="Patient Details">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="Consultation Slot">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 px-12">
                Morning
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 px-12">
                Afternoon
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 px-12">
                Evening
              </Button>
            </div>
            <div className="slots">
              <div className="morning-slots flex flex-wrap justify-center gap-2 mt-8">
                {morningSlots.map((slot) => (
                  <Button color="light">{slot.time}</Button>
                ))}
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item disabled title="Review & Confirm">
            Disabled content
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Patient;

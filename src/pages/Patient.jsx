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

import React, { useRef, useState } from "react";
import { dates } from "../constant";
import generateTimeSlots from "../utils/generateTimeSlots";

const Patient = ({ physios }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [slots, setSlots] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });

  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [confirmed, setConfirmed] = useState(false);

  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const updateAvailableSlots = (e, date) => {
    e.stopPropagation();

    physios.forEach((physio) => {
      physio.slots.forEach((slot) => {
        const morningSlots = generateTimeSlots(
          slot.morning.start,
          slot.morning.end
        );
        const afternoonSlots = generateTimeSlots(
          slot.afternoon.start,
          slot.afternoon.end
        );
        const eveningSlots = generateTimeSlots(
          slot.evening.start,
          slot.evening.end
        );

        setSlots((prev) => {
          const uniqueMorningSlots = Array.from(
            new Set([...prev.morning, ...morningSlots])
          );
          const uniqueAfternoonSlots = Array.from(
            new Set([...prev.afternoon, ...afternoonSlots])
          );
          const uniqueEveningSlots = Array.from(
            new Set([...prev.evening, ...eveningSlots])
          );
          console.log("unique", uniqueMorningSlots);
          return {
            ...prev,
            morning: uniqueMorningSlots,
            afternoon: uniqueAfternoonSlots,
            evening: uniqueEveningSlots,
          };
        });
      });
    });

    setSelectedDate(date);
  };

  return (
    <div className="px-48 max-lg:px-12 mt-6 max-sm:px-2">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-yellow-300 pl-2">
        Book your appointment
      </h2>

      <h1 className="font-semibold my-6">Select Date & Time</h1>
      <div className="day-select">
        <SwiperComponent
          slidesPerView={3}
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
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="flex justify-center"
        >
          {dates.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                href="#"
                className={`max-w-sm cursor-pointer max-sm:w-[150px] ${
                  selectedDate === item.date
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={(e) => updateAvailableSlots(e, item.date)}
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
      <div className="progress mt-12">
        <Tabs
          aria-label="Default tabs"
          style="default"
          className="flex justify-around"
          ref={tabsRef}
          onActiveTabChange={(tab) => setActiveTab(tab)}
        >
          <Tabs.Item title="Patient Details">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Patient tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one.
          </Tabs.Item>
          <Tabs.Item active title="Consultation Slot">
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
                {timeOfDay === "morning" ? (
                  slots.morning.length === 0 ? (
                    <h1>Sorry, no slots available</h1>
                  ) : (
                    slots.morning.map((slot) => (
                      <Button
                        className={`${
                          selectedTime === slot
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 text-white"
                            : "bg-white text-black border-black-500 hover:bg-stone-400"
                        }`}
                        color="light"
                        key={Math.random() * 10}
                        onClick={() => setSelectedTime(slot)}
                      >
                        {slot}
                      </Button>
                    ))
                  )
                ) : (
                  ""
                )}
                {timeOfDay === "afternoon" ? (
                  slots.afternoon.length === 0 ? (
                    <h1>Sorry, no slots available</h1>
                  ) : (
                    slots.afternoon.map((slot) => (
                      <Button
                        className={`${
                          selectedTime === slot
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white"
                            : "bg-white text-black border-black-500 hover:bg-stone-400"
                        }`}
                        onClick={() => setSelectedTime(slot)}
                        color="light"
                        key={Math.random() * 10}
                      >
                        {slot}
                      </Button>
                    ))
                  )
                ) : (
                  ""
                )}
                {timeOfDay === "evening" ? (
                  slots.evening.length === 0 ? (
                    <h1>Sorry, no slots available</h1>
                  ) : (
                    slots.evening.map((slot) => (
                      <Button
                        className={` hover:bg-red ${
                          selectedTime === slot
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-20 text-white"
                            : "bg-white text-black border-black-500"
                        }`}
                        onClick={() => setSelectedTime(slot)}
                        color="light"
                        key={Math.random() * 10}
                      >
                        {slot}
                      </Button>
                    ))
                  )
                ) : (
                  ""
                )}
              </div>
              {selectedTime && (
                <div className="flex justify-center mt-6">
                  <Button
                    gradientMonochrome="success"
                    onClick={() => {
                      tabsRef.current?.setActiveTab(2);
                      setConfirmed(true);
                    }}
                  >
                    Confirm
                  </Button>
                </div>
              )}
            </div>
          </Tabs.Item>
          <Tabs.Item
            disabled={!confirmed}
            active={confirmed}
            title="Review & Confirm"
          >
            <h1 className="text-center">Review & Confirm</h1>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Patient;

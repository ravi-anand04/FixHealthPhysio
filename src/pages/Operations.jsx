// Patient.js
import { Button, Card, Dropdown, Tabs, Textarea } from "flowbite-react";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useRef, useState } from "react";
import { dates } from "../constant";
import generateTimeSlots from "../utils/generateTimeSlots";

const Operations = ({ physios }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPhysio, setSelectedPhysio] = useState({
    id: "",
    name: "",
    email: "",
    slots: [],
  });

  const [slots, setSlots] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });

  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [confirmed, setConfirmed] = useState(false);

  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (date) => {
    setSelectedDate(date);
    // changePhysio(selectedPhysio.name);
  };

  const changePhysio = (name) => {
    const currentPhysio = physios.find((physio) => physio.name === name);
    const currentPhysioSlots = currentPhysio?.slots?.find(
      (slot) => slot.date === selectedDate
    );

    const { morning, afternoon, evening } = currentPhysioSlots;

    const morningSlots = generateTimeSlots(morning.start, morning.end);
    const afternoonSlots = generateTimeSlots(afternoon.start, afternoon.end);
    const eveningSlots = generateTimeSlots(evening.start, evening.end);

    setSlots({
      morning: morningSlots,
      afternoon: afternoonSlots,
      evening: eveningSlots,
    });

    setSelectedPhysio(currentPhysio);
  };

  return (
    <div className="px-48 max-lg:px-12 mt-6 max-sm:px-2">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-yellow-300 pl-2">
        Operations
      </h2>

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
          label={selectedPhysio.id ? selectedPhysio.name : "Select Physio"}
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
        {!selectedDate && (
          <h1 className="text-red-500 text-sm font-semibold mt-2 ml-4">
            Select date first
          </h1>
        )}
      </div>
      {selectedPhysio.id && (
        <div className="slots mt-8">
          <div className="timing-summary my-6">
            <h1 className="text-lg font-semibold">
              Morning :{" "}
              <span className="text-lg font-light">
                Start:{" "}
                {
                  selectedPhysio.slots.find(
                    (slot) => slot.date === selectedDate
                  ).morning.start
                }
                , End:{" "}
                {
                  selectedPhysio.slots.find(
                    (slot) => slot.date === selectedDate
                  ).morning.end
                }
              </span>
            </h1>

            <h1 className="text-lg font-semibold">
              Afternoon :{" "}
              <span className="text-lg font-light">
                {" "}
                Start:{" "}
                {
                  selectedPhysio.slots.find(
                    (slot) => slot.date === selectedDate
                  ).afternoon.start
                }
                , End:{" "}
                {
                  selectedPhysio.slots.find(
                    (slot) => slot.date === selectedDate
                  ).afternoon.end
                }
              </span>
            </h1>
            <h1 className="text-lg font-semibold">
              Evening :{" "}
              <span className="text-lg font-light">
                Start:{" "}
                {
                  selectedPhysio.slots.find(
                    (slot) => slot.date === selectedDate
                  ).evening.start
                }
                , End:{" "}
                {
                  selectedPhysio.slots.find(
                    (slot) => slot.date === selectedDate
                  ).evening.end
                }
              </span>
            </h1>
          </div>
          <Tabs
            aria-label="Default tabs"
            style="default"
            className="flex justify-evenly"
            ref={tabsRef}
            onActiveTabChange={(tab) => setActiveTab(tab)}
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
                  key={new Date()}
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
                        tabsRef.current?.setActiveTab(1);
                        setConfirmed(true);
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                )}
              </div>
            </Tabs.Item>
            <Tabs.Item disabled={!confirmed} active={confirmed} title="Remarks">
              <div className="flex flex-col items-center gap-4 justify-center">
                <Textarea
                  id="comment"
                  placeholder="Leave a remark..."
                  required
                  rows={6}
                  className="w-1/2 max-sm:w-full"
                />
                <Button gradientMonochrome="success">Submit</Button>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Operations;

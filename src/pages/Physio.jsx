// Physio.js
import { Button } from "flowbite-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dates } from "../constant";

const Physio = () => {
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="px-48 max-lg:px-12 my-8 max-sm:px-2">
      <h2 className="text-2xl font-bold mb-8">Physio View</h2>
      <h2 className="text-2xl font-semibold mb-8">
        Hi, <span className="text-green-500 font-bold">John</span>
      </h2>
      <h2 className="text-2xl font-semibold border-l-4 border-yellow-300 pl-2">
        Select your availability
      </h2>
      <div className="timings mt-16 flex flex-col gap-4">
        {dates.map((item, index) => (
          <div
            className="flex flex-wrap gap-4 justify-center max-md:justify-center items-center"
            key={index}
          >
            <div className="w-[120px] max-sm:w-full">
              <h1 className="font-bold">{item.date}</h1>
            </div>
            <input
              className="rounded-md outline-none max-md:w-[150px] bg-stone-100"
              type="text"
              placeholder="Enter start time"
            />
            <input
              className="rounded-md outline-none max-md:w-[150px] bg-stone-100"
              type="text"
              placeholder="Enter end time"
            />
            <Button gradientDuoTone="greenToBlue">Save</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Physio;

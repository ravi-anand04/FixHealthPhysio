// Physio.js
import { Button, Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { dates } from "../constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Physio = ({ physios, updatePhysios }) => {
  const [selectedPhysio, setSelectedPhysio] = useState({
    id: "",
    name: "",
    email: "",
    slots: [],
  });

  const handleTimeChange = (e, date, phase) => {
    setSelectedPhysio((prev) => {
      const updatedSlots = prev.slots.map((slot) =>
        slot.date === date
          ? {
              ...slot,
              [phase]: { ...slot[phase], [e.target.name]: e.target.value },
            }
          : slot
      );

      console.log("Updated Slots", updatedSlots);

      return {
        ...prev,
        slots: updatedSlots,
      };
    });
  };

  const handleSave = () => {
    const updatedPhysios = physios.map((physio) =>
      physio.name === selectedPhysio.name ? selectedPhysio : physio
    );

    updatePhysios(updatedPhysios);

    toast.success("Save successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="px-36 max-xl:px-12 my-8 max-sm:px-2">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {!selectedPhysio.id ? (
        <div>
          <h2 className="text-2xl font-bold mb-4 mt-12">
            Please select a physio
          </h2>
          <Dropdown
            label={selectedPhysio.id ? selectedPhysio.name : "Select Physio"}
            dismissOnClick={true}
            color="gray"
          >
            {physios.map((physio) => (
              <Dropdown.Item
                key={physio.id}
                value={physio.name}
                onClick={() => setSelectedPhysio(physio)}
              >
                {physio.name}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-8">Physio View</h2>
          <h2 className="text-2xl font-semibold mb-8">
            Welcome,{" "}
            <span className="text-green-500 font-bold">
              {selectedPhysio.name}
            </span>
          </h2>
          <h2 className="text-2xl font-semibold border-l-4 border-yellow-300 pl-2 mb-8">
            Select your availability
          </h2>
          <div className="font-semibold text-lg">
            Please enter start and end timings
          </div>
          <div className="timings mt-8 flex flex-col gap-4">
            {dates.map((item, index) => (
              <div
                className="flex flex-wrap gap-4 justify-center max-md:justify-center items-end"
                key={index}
              >
                <div className="w-[120px] max-sm:w-full self-center">
                  <h1 className="font-semibold">{item.date}</h1>
                </div>
                <div className="morning-timings flex flex-col gap-4 max-lg:gap-2">
                  <div className="font-semibold">Morning</div>
                  <div className="start flex gap-4 max-lg:gap-2 mr-3">
                    <input
                      className="rounded-md outline-none max-md:w-[150px] bg-stone-100 shadow-xl"
                      type="time"
                      name="start"
                      onChange={(e) =>
                        handleTimeChange(e, item.date, "morning")
                      }
                    />
                    <input
                      className="rounded-md outline-none max-md:w-[150px] bg-stone-100 shadow-xl"
                      type="time"
                      name="end"
                      onChange={(e) =>
                        handleTimeChange(e, item.date, "morning")
                      }
                    />
                  </div>
                  {/* <div className="end flex gap-4 max-lg:gap-2 ml-3">
              </div> */}
                </div>
                <div className="afternoon-timings flex flex-col gap-4 max-lg:gap-2">
                  <div className="font-semibold">Afternoon</div>
                  <div className="start flex gap-4 max-lg:gap-2 mr-3">
                    <input
                      className="rounded-md outline-none max-md:w-[150px] bg-stone-100 shadow-xl"
                      type="time"
                      name="start"
                      onChange={(e) =>
                        handleTimeChange(e, item.date, "afternoon")
                      }
                    />
                    <input
                      className="rounded-md outline-none max-md:w-[150px] bg-stone-100 shadow-xl"
                      name="end"
                      type="time"
                      onChange={(e) =>
                        handleTimeChange(e, item.date, "afternoon")
                      }
                    />
                  </div>
                </div>
                <div className="evening-timings flex flex-col gap-4 max-lg:gap-2">
                  <div className="font-semibold">Evening</div>
                  <div className="start flex gap-4 max-lg:gap-2 mr-3">
                    <input
                      className="rounded-md outline-none max-md:w-[150px] bg-stone-100 shadow-xl"
                      name="start"
                      type="time"
                      onChange={(e) =>
                        handleTimeChange(e, item.date, "evening")
                      }
                    />
                    <input
                      className="rounded-md outline-none max-md:w-[150px] bg-stone-100 shadow-xl"
                      name="end"
                      type="time"
                      onChange={(e) =>
                        handleTimeChange(e, item.date, "evening")
                      }
                    />
                  </div>
                </div>
                <Button gradientDuoTone="greenToBlue" onClick={handleSave}>
                  Save
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Physio;

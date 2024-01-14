export const // Function to generate an array of time objects
  generateTimeArray = (start, end) => {
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

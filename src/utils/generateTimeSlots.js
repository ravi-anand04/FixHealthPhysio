function generateTimeSlots(startTime, endTime, interval = 15) {
  const timeSlots = [];

  // Convert start and end time to Date objects
  const startDate = new Date(`01/01/2022 ${startTime}`);
  const endDate = new Date(`01/01/2022 ${endTime}`);

  // Initialize current time to start time
  let currentTime = startDate;

  // Iterate over time slots until the current time reaches or exceeds end time
  while (currentTime < endDate) {
    // Format the current time to HH:mm format
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add the formatted time to the time slots array
    timeSlots.push(formattedTime);

    // Increment the current time by the specified interval
    currentTime.setMinutes(currentTime.getMinutes() + interval);
  }

  return timeSlots;
}

export default generateTimeSlots;

// Example usage:
// const startTime = '8:15 AM';
// const endTime = '4:00 PM';
// const interval = 15;

// const timeSlots = generateTimeSlots(startTime, endTime, interval);
// console.log(timeSlots);

const dates = [
  { id: 1, date: "Mon, 15 Jan" },
  { id: 2, date: "Tue, 16 Jan" },
  { id: 3, date: "Wed, 17 Jan" },
  { id: 4, date: "Thu, 18 Jan" },
  { id: 5, date: "Fri, 19 Jan" },
  { id: 6, date: "Sat, 20 Jan" },
];

const employees = [
  {
    id: 1,
    name: "Dr. Smith",
    email: "dr.smith@example.com",
    slots: [
      {
        date: "Mon, 15 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Tue, 16 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Wed, 17 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Thu, 18 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Fri, 19 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Sat, 20 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Johnson",
    email: "dr.johnson@example.com",
    slots: [
      {
        date: "Mon, 15 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Tue, 16 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Wed, 17 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Thu, 18 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Fri, 19 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Sat, 20 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Williams",
    email: "dr.williams@example.com",
    slots: [
      {
        date: "Mon, 15 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Tue, 16 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Wed, 17 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Thu, 18 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Fri, 19 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
      {
        date: "Sat, 20 Jan",
        morning: { start: "8:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "17:00" },
      },
    ],
  },
];

export { dates, employees };

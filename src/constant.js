const dates = [
  { id: 1, date: "Mon, 15 Jan" },
  { id: 2, date: "Tue, 16 Jan" },
  { id: 3, date: "Wed, 17 Jan" },
  { id: 4, date: "Thu, 18 Jan" },
  { id: 5, date: "Fri, 19 Jan" },
  { id: 6, date: "Sat, 20 Jan" },
];

const physios = [
  {
    id: 1,
    name: "Dr. Smith",
    email: "dr.smith@example.com",
    slots: [
      { date: "Mon, 15 Jan", start: "8", end: "10" },
      { date: "Tue, 16 Jan", start: "11", end: "13" },
      { date: "Wed, 17 Jan", start: "8", end: "14" },
      { date: "Thu, 18 Jan", start: "10", end: "17" },
      { date: "Fri, 19 Jan", start: "10", end: "14" },
      { date: "Sat, 20 Jan", start: "12", end: "14" },
    ],
  },
  {
    id: 2,
    name: "Dr. Johnson",
    email: "dr.johnson@example.com",
    slots: [
      { date: "Mon, 15 Jan", start: "10", end: "14" },
      { date: "Tue, 16 Jan", start: "13", end: "15" },
      { date: "Wed, 17 Jan", start: "8", end: "10" },
      { date: "Thu, 18 Jan", start: "14", end: "17" },
      { date: "Fri, 19 Jan", start: "10", end: "17" },
      { date: "Sat, 20 Jan", start: "9", end: "14" },
    ],
  },
  {
    id: 3,
    name: "Dr. Williams",
    email: "dr.williams@example.com",
    slots: [
      { date: "Mon, 15 Jan", start: "9", end: "16" },
      { date: "Tue, 16 Jan", start: "8", end: "16" },
      { date: "Wed, 17 Jan", start: "8", end: "14" },
      { date: "Thu, 18 Jan", start: "15", end: "17" },
      { date: "Fri, 19 Jan", start: "14", end: "17" },
      { date: "Sat, 20 Jan", start: "10", end: "14" },
    ],
  },
];

export { dates, physios };

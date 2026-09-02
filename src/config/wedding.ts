/**
 * CENTRAL WEDDING CONFIGURATION
 * Every editable detail of the invitation lives here.
 * Replace the placeholder values below with the real wedding details.
 */

export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  icon: "crescent" | "rings" | "lantern" | "dinner";
};

export const wedding = {
  bride: {
    firstName: "Naina",
    fullName: "Naina [Surname]",
    parents: "Daughter of Mr. & Mrs. [Bride's Parents]",
  },
  groom: {
    firstName: "Aariz",
    fullName: "Aariz [Surname]",
    parents: "Son of Mr. & Mrs. [Groom's Parents]",
  },

  initials: "N & A",

  /** Human readable date + time (display only) */
  date: "Saturday, 14 February 2027",
  dayName: "Saturday",
  dayNumber: "14",
  monthName: "February",
  year: "2027",
  time: "6:30 PM onwards",

  /** ISO datetime used by the countdown + calendar file. Local time. */
  dateISO: "2027-02-14T18:30:00",
  endISO: "2027-02-14T23:30:00",

  welcomeLine: "Welcome to the",
  welcomeTitle: "Nikkah Ceremony",
  welcomeJoin: "of",

  venue: {
    name: "[Venue Name]",
    address: "[Full venue address, City, State]",
    mapsQuery: "[Venue Name, City]",
  },

  events: [
    {
      id: "mehndi",
      title: "Mehndi",
      date: "Thursday, 12 February 2027",
      time: "5:00 PM",
      venue: "[Venue / Residence]",
      icon: "lantern",
    },
    {
      id: "nikah",
      title: "Nikah",
      date: "Saturday, 14 February 2027",
      time: "6:30 PM",
      venue: "[Venue Name]",
      icon: "crescent",
    },
    {
      id: "reception",
      title: "Reception",
      date: "Saturday, 14 February 2027",
      time: "8:00 PM",
      venue: "[Venue Name]",
      icon: "rings",
    },
    {
      id: "dinner",
      title: "Walima Dinner",
      date: "Sunday, 15 February 2027",
      time: "7:30 PM",
      venue: "[Venue Name]",
      icon: "dinner",
    },
  ] satisfies WeddingEvent[],

  dressCode: {
    description:
      "We would love for you to join us in soft traditional formals — flowing silhouettes in the palette below.",
    colors: [
      { name: "Ivory", hex: "#FAF7F0" },
      { name: "Cream", hex: "#F5EFE5" },
      { name: "Champagne", hex: "#D9C09C" },
      { name: "Taupe", hex: "#C3B29B" },
      { name: "Dusty Rose", hex: "#DDBDB6" },
      { name: "Sage", hex: "#B9C3AE" },
      { name: "Warm Brown", hex: "#8B7256" },
    ],
  },

  invitationMessage:
    "With hearts full of gratitude and joy, we invite you to share in the blessing of our union — an evening of prayers, laughter and celebration with the people we love most.",

  quote:
    "\u201cAnd among His signs is this, that He created for you mates from among yourselves, that you may find tranquillity in them.\u201d — placeholder verse, edit in config",

  guestInformation: [
    {
      title: "Timing",
      body: "Kindly arrive fifteen minutes before the ceremony so we may begin together.",
    },
    {
      title: "Dress Code",
      body: "Traditional formals in the ivory and champagne palette shown above.",
    },
    {
      title: "Children & Family",
      body: "[Placeholder — add your note about children and family attending.]",
    },
    {
      title: "Parking",
      body: "[Placeholder — add parking or valet details for the venue.]",
    },
    {
      title: "Photography",
      body: "[Placeholder — add your photography or unplugged-ceremony preference.]",
    },
    {
      title: "Gifts",
      body: "[Placeholder — add a gentle note about gifts, if you wish.]",
    },
  ],

  /** Optional background music. Leave empty to keep the control disabled. */
  musicSrc: "",

  footer: {
    signOff: "With Love,",
    thanks: "Thank you for celebrating with us.",
  },
} as const;

export type Wedding = typeof wedding;

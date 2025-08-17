export const registrationFormLink = "";
export const resgistrationFormOnClick = (event) => {
  if (registrationFormLink === "https://unstop.com/o/lrPx7og?lb=a8UehKVd") {
    event.preventDefault();
    alert("The registration process has not yet begun.");
  }
};

export const sponsorData = [
  {
    id: 0,
    image: "/icons/sponsor1.png",
    path: `https://walkover.in/`,
  },
  {
    id: 1,
    image: "/icons/sponsor2.png",
    path: "https://github.com/",
  },
  {
    id: 2,
    image: "/icons/sponsor3.png",
    path: "https://codingblocks.com/",
  },
  {
    id: 3,
    image: "/icons/sponsor4.png",
    path: "https://mvp.microsoft.com/studentambassadors",
  },
  {
    id: 4,
    image: "/icons/sponsor5.png",
    path: "https://progate.com/",
  },
  {
    id: 5,
    image: "/icons/sponsor6.png",
    path: "https://chicagopizza.in/",
  },
  {
    id: 6,
    image: "/icons/sponsor7.png",
    path: null,
  },
  {
    id: 7,
    image: "/icons/sponsor8.png",
    path: "https://www.hackerearth.com/",
  },
  {
    id: 8,
    image: "/icons/sponsor9.png",
    path: "https://www.instagram.com/hack.soc/?hl=en",
  },
  {
    id: 9,
    image: "/icons/sponsor10.png",
    path: "https://www.linkedin.com/company/devcindore/",
  },
  {
    id: 10,
    image: "/icons/sponsor11.png",
    path: "https://foxmula.com/#/",
  },
];

export const dateOfHackIndore = new Date(2025, 8, 20, 10, 0, 0);
export const endingDateOfHackIndore = new Date(2025, 8, 20, 18, 0, 0);

export const rightSideBarText = "Tech Club";

export const tying_data_hero_page = ["Think 💡", "Code 🖥️", "Innovate 🚀"];

export const countdownDetails = {
  timeTillDate: "2025-09-20 10:00",
  timeFormat: "YYYY-MM-DD HH:mm",
};

export const mapEmbedLink =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.081055030593!2d75.86915531550125!3d22.725228485104452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd13ed2bae49%3A0xb884fc340de875c6!2sShri%20Govindram%20Seksaria%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1678914770248!5m2!1sen!2sin";

export const socialMedia = [
  {
    name: "Instagram",
    url: "https://instagram.com/include._",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/include-sgsits/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/include_sgsits",
  },
  {
    name: "Email",
    url: "mailto: hackindore.gsits@gmail.com",
  },
];

export const previousMentorsDetails = [
  {
    name: "Chary Smith",
    title: "SEO at Comoti",
    avatar: "https://assets.maccarianagency.com/avatars/img3.jpg",
    about:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
  },
  {
    name: "Clara Bertoletti",
    title: "Junior Designer",
    avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
    about:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
  },
];

export const prevImgsDetails = [
  {
    key: "1",
    src: "previous_images/Hack1.JPG",
    width: 4,
    height: 4,
    alt: "Previous Event Images",
    loading: "lazy",
  },
  {
    key: "2",
    src: "previous_images/Hack2.JPG",
    width: 4,
    height: 3,
    alt: "Previous Event Images",
    loading: "lazy",
  },
  {
    key: "3",
    src: "previous_images/Hack3.JPG",
    width: 4,
    height: 4,
    alt: "Previous Event Images",
    loading: "lazy",
  },
  {
    key: "4",
    src: "previous_images/Hack4.JPG",
    width: 3,
    height: 4,
    alt: "Previous Event Images",
    loading: "lazy",
  },
  {
    key: "5",
    src: "previous_images/Hack5.JPG",
    width: 3,
    height: 4,
    alt: "Previous Event Images",
    loading: "lazy",
  },
  {
    key: "6",
    src: "previous_images/Hack6.JPG",
    width: 4,
    height: 3,
    alt: "Previous Event Images",
    loading: "lazy",
  },
  {
    key: "7",
    src: "previous_images/Hack7.JPG",
    width: 3,
    height: 4,
    alt: "Previous Event Images",
    loading: "lazy",
  },
  {
    key: "8",
    src: "previous_images/Hack8.JPG",
    width: 4,
    height: 3,
    alt: "Previous Event Images",
    loading: "lazy",
  },
];

export const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is HackIndore?",
        content:
          "HackIndore is a 8-hour coding event in which software programmers, developers, designers, etc collaborate to build and design innovative and helpful solutions.",
      },
      {
        label: "Do I need to have programming experience?",
        content:
          "While having prior experience with programming is always beneficial and recommended since HackIndore is solely based on the coding skills. However, there is no need to worry if you are not proficient in programming or are a beginner, as mentors will be available throughout the event to provide guidance and assistance to steer you in the right direction.",
      },
      {
        label: "Why should I attend HackIndore ?",
        content:
          "Why not? Well, there are a number of reasons for you to be part of this. Opportunity to network with software enthusiasts and recruiters during and after the event. Moreover, you'll walk away with great experiences and learnings. In addition to that, we also have a few giveaways for you.",
      },
      // {
      //     label: 'Do you provide travel reimbursements?',
      //     content:
      //         "Yes! Once accepted, you will have to submit your travel reimbursement forms and receipts on the dashboard. For each location hackers travel from, we’ll determine a reasonable cap. We will reimburse travel costs up to this cap only. Moreover, max of 1500 will provide only"
      // }
    ],
    [
      {
        label: "Who can participate in HackIndore",
        content:
          "The HackIndore is organized for college and university students only. Any college or university student can participate, irrespective of branch, year, city, etc.",
      },
      {
        label: "But isn't hacking illegal?",
        content:
          'Haha, my one of the favorite parts! The word "hack" is a bit misinterpreted in reference to hackathons, while over here no one is hacking into something. A hackathon is an event in which a large number of people meet to engage in collaborative computer programming.',
      },
      {
        label: "Is it a team event?",
        content:
          "Yes, your participation in a team will provide you exposure to a corporate setting, enabling you to adjust and work with new folks with different skill sets. A team must consist of three members.",
      },
      {
        label: "What can I hack at HackIndore",
        content:
          "As mentioned earlier, you have the flexibility to build anything. A website, a web application, an Android or iOS application, a Chrome extension, whatever one desires. So get ready to participate in one of the most exciting hackathons. #HackIndore",
      },
      {
        label: "More Questions?",
        content:
          "Feel free to email us with any questions at hackindore.gsits@gmail.com, you can also reach out to us on our social media handles.",
      },
    ],
  ],
];

export const timelineData = [
  {
    text: "Registration Starts",
    date: "August 17 2025",
  },
  {
    text: "Theme Release",
    date: "August 25 2025",
  },
  {
    text: "Registration Ends",
    date: "August 31 2025",
  },
  {
    text: "Presentation Rounds",
    date: "September 01 2025",
  },
  {
    text: "Final Hackathon, SGSITS",
    date: "September 20 2025",
  },
  {
    text: "Hackathon Ends",
    date: "September 20 2025",
  },
  {
    text: "Announcement of Winners",
    date: "September 20 2025",
  },
];

export const contactDetails = {
  numbers: ["+91 8435358999"],
  email: "hackindore.gsits@gmail.com",
  address:
    "Shri Govindram Seksaria Institute of Technology and Science, 23, Sir M. Visvesvaraya Marg, Vallabh Nagar, Indore, Madhya Pradesh 452003, India",
};

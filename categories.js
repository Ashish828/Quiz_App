import GK from "./assets/categories-icons/general-knowledge.svg";
import Entertainment from "./assets/categories-icons/entertainment.svg";
import Science from "./assets/categories-icons/Science.svg";
import Mythology from "./assets/categories-icons/myth.svg";
import Sports from "./assets/categories-icons/sports.svg";
import Geography from "./assets/categories-icons/geography.svg";
import History from "./assets/categories-icons/history.svg";
import Politics from "./assets/categories-icons/politics.svg";
import Art from "./assets/categories-icons/art.svg";
import Celebrities from "./assets/categories-icons/actor.svg";
import Animals from "./assets/categories-icons/animals.svg";
import Vehicles from "./assets/categories-icons/vehicles.svg";

export const categories = [
  {
    id: 9,
    name: "General Knowledge",

    bg_color: ["#4158D0", "#C850C0", "#FFCC70"],
    svg: GK,
    height: 200,
    right: -80,
    top: -120,
  },
  {
    id: 14,
    name: "Entertainment",
    bg_color: ["#8EC5FC", "#E0C3FC"],
    height: 150,
    right: -50,
    top: -50,
    svg: Entertainment,
  },
  {
    id: 17,
    name: "Science",
    bg_color: ["#FA8BFF", "#2BD2FF", "#2BFF88"],
    height: 125,
    right: -30,
    top: -35,
    svg: Science,
  },

  {
    id: 20,
    name: "Mythology",

    bg_color: ["#FF9A8B", "#FF6A88", "#FF99AC"],

    height: 250,
    right: -70,
    top: -80,
    svg: Mythology,
  },
  {
    id: 21,
    name: "Sports",

    bg_color: ["#FBDA61", "#FF5ACD"],

    height: 125,
    right: -30,
    top: -30,
    svg: Sports,
  },
  {
    id: 22,
    name: "Geography",

    bg_color: ["#08AEEA", "#2AF598"],
    height: 125,
    right: -20,
    top: -30,
    svg: Geography,
  },
  {
    id: 23,
    name: "History",

    bg_color: ["#FFDEE9", "#B5FFFC"],
    height: 150,
    right: -30,
    top: -50,
    svg: History,
  },
  {
    id: 24,
    name: "Politics",
    bg_color: ["#21D4FD", "#B721FF"],

    height: 150,
    right: -30,
    top: -30,
    svg: Politics,
  },
  {
    id: 25,
    name: "Art",
    bg_color: ["#A9C9FF", "#FFBBEC"],
    height: 150,
    right: -30,
    top: -30,
    svg: Art,
  },
  {
    id: 26,
    name: "Celebrities",
    bg_color: ["#b465da", "#cf6cc9", "#ee609c", "#ee609c"],
    height: 150,
    right: -30,
    top: -30,
    svg: Celebrities,
  },
  {
    id: 27,
    name: "Animals",
    bg_color: ["#21D4FD", "#B721FF"],
    height: 150,
    right: -30,
    top: -20,
    svg: Animals,
  },
  {
    id: 28,
    name: "Vehicles",
    bg_color: ["#4158D0", "#C850C0", "#FFCC70"],
    height: 200,
    right: -20,
    top: -80,
    svg: Vehicles,
  },
];

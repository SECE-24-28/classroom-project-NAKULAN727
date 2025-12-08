import {
  faBuildingColumns,
  faChalkboardUser,
  faBook,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

export const PositionData = [
  {
    title: "100+",
    content: "Colleges",
    icon: faBuildingColumns,
    color: "rgb(0,197,190)",
  },
  {
    title: "150",
    content: "Professional Trainers",
    icon: faChalkboardUser,
    color: "rgb(0,189,235)",
  },
  {
    title: "1000+",
    content: "Study Materials",
    icon: faBook,
    color: "rgb(243,176,79)",
  },
  {
    title: "100000+",
    content: "Students",
    icon: faUserGraduate,
    color: "rgb(255,107,107)",
  },
];

//  {
//           PositionData.map((item, index) => {
//             return (
//               <div className="child" key={index} style={{ borderTop: 4px solid ${item.color} }}>
//                 <div className="title__parent">
//                   <FontAwesomeIcon
//                     icon={item.icon}
//                     color={item.color}
//                     fontSize="30px"
//                   />
//                   <h1 className="title">{item.title}</h1>
//                 </div>
//                 <div>
//                   <p className="para">{item.content}</p>
//                 </div>
//               </div>
//             );
//           }
//         }
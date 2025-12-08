import {
  faLaptopCode,
  faMobile,
  faNetworkWired,
  faPeopleGroup,
  faRightFromBracket,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export const OurpromisesData = [
  {
    title: "Top Code Quality",
    content:
      "Our commitment goes beyond mere code — we deliver complete solutions with W3C-compliant, high-quality markup and zero compromise.",
    icon: faLaptopCode,
    color: "rgb(68,178,179)",
  },
  {
    title: "Responsive",
    content:
      "We value positivity, timely responsiveness, and adaptability. We listen attentively and use our full capabilities to support you.",
    icon: faMobile,
    color: "rgb(239,175,75)",
  },
  {
    title: "Rockstar Team",
    content:
      "Our expertise is our biggest strength. You get access to a seasoned, all-star team dedicated to delivering exceptional results.",
    icon: faPeopleGroup,
    color: "rgb(0,189,235)",
  },
  {
    title: "Fast Turn-arounds",
    content:
      "Speed matters as much as quality. We're swift, agile, and capable of delivering high-quality code within your preferred timeline.",
    icon: faRightFromBracket,
    color: "rgb(134,74,249)",
  },
  {
    title: "Life-time Support",
    content:
      "Our commitment doesn't end with delivery. If any bugs appear in the future, you can always reach out — we’ve got your back.",
    icon: faShieldHalved,
    color: "rgb(252,41,71)",
  },
  {
    title: "Secured Agreement",
    content:
      "Our commitment doesn't end with delivery. If any bugs appear in the future, you can always reach out — we’ve got your back.",
    icon: faShieldHalved,
    color: "rgb(50,199,102)",
  },
];

//  {
//           Ourpromises.map((item, index) => {
//             return (
//               <div className="child" key={index} style={{ borderTop: `4px solid ${item.color}` }}>
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
import {
  faPhone,
  faUser,
  faMailBulk,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { freeText } from "utils/helpers";

export const closeFriendsPatterns: any = {
  firstName: freeText,
  lastName: freeText,
  email:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:]|])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:)+)\])/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
  instagramId: freeText,
  age: freeText
};

export default [
  {
    name: "firstName",
    label: "First Name",
    icon: faUser,
    errorMessage: "Enter your First name",
    required: true
  },
  {
    name: "lastName",
    label: "Last Name",
    icon: faUser,
    errorMessage: "Enter your last name",
    required: true
  },
  {
    name: "phone",
    label: "Phone Number",
    icon: faPhone,
    required: true,
    errorMessage: "Enter your phone number"
  },
  {
    name: "email",
    label: "Your Email Address",
    icon: faMailBulk,
    errorMessage: "Enter your address",
    required: true
  },
  {
    name: "instagramId",
    label: "Your Instagram Handle",
    icon: faAt,
    errorMessage: "Enter your instagram handle",
    required: true
  },
  {
    name: "age",
    label: "Age",
    icon: faUser,
    errorMessage: "Please add your age",
    required: true
  }
];

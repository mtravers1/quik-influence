import axios from "axios";

const baseurl = "https://quik-influence-prod.herokuapp.com";
// const baseurl =
//   process.env.NODE_ENV === "production"
//     ? "https://quik-influence-prod.herokuapp.com"
//     : "https://quik-influence.herokuapp.com";

export const axiosInstance = axios.create({
  baseURL: `${baseurl}/api/v1`,
  headers: {
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type",
    "Access-Control-Allow-Origin": "*"
  }
});

export const freeText = /[^\n]{2,}/;

export const patterns: any = {
  name: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
  email:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:]|])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:)+)\])/,
  phoneNumber: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
  isInfluencer: freeText,
  company: freeText,
  industry: freeText
};

export const validate = (field: any, Regex: any, fieldPatterns: any) => {
  if (fieldPatterns[Regex].test(field)) return true;
  return false;
};

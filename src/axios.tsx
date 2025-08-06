import axios from "axios";
import { baseUrl } from "./constants/Constants";

//CREATIN GOUR OWN AXIOS .HERE WE CREATE AN INSTANCE OF AXIOS . BUT WE IMPORT AS AXIOS

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;

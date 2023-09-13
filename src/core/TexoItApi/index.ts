import axios from "axios";

const TexoItApi = axios.create({
  baseURL: 'https://tools.texoit.com/backend-java/api',
});

export default TexoItApi;

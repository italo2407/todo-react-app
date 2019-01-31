import {API_URL} from "../common/constant";
import axios from 'axios';

export default {
    feedbacks() {
        return {
          getAll: () => axios.get(API_URL),
          update: (toUpdate) =>  axios.put(API_URL,toUpdate),
          create: (toCreate) =>  axios.post(API_URL,toCreate),
          delete: (id) =>  axios.delete(`${API_URL}/${id}`)
        }
      }
}
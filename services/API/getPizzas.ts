import axios from "axios";
import { API_URL } from "@/constants";
import { IPizza } from "@/interfaces";

interface IGetPizzasResponse {
  data: { pizzas: IPizza[] };
}

export const getPizzas = async () => {
  return await axios.get<IGetPizzasResponse>(`${API_URL}/pizzas`);
};

export default getPizzas;

import axios from "axios";
import { Params } from "react-router-dom";

export function Page() {
  return <></>;
}
export async function PageLoader({ params }: { params: Params<string> }) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/${params.thing}/?limit=${
      30 * Number.parseInt(params.num ? params.num : "1")
    }`
  );
  console.log(res);
  return res.data;
}

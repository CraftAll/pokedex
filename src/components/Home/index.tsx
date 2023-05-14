import axios from "axios";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { IData } from "./types";
import "./home.scss";

export function Home() {
  const data = useLoaderData() as IData;
  const pokemons = data.results;
  return (
    <main className="pokemons">
      {pokemons.map((pokemon) => (
        <Link to={`/pokemon/${pokemon.name}`} className="pokemon">
          {pokemon.name}
        </Link>
      ))}
      <nav>
        <NavLink to={"/pokemon/page/2"}>next</NavLink>
      </nav>
    </main>
  );
}

export async function HomeLoader() {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30");
  return res.data;
}

import axios from "axios";
import { useEffect, useState } from 'react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const useCustomReactQuery = (urlPath) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(urlPath);
        const pokemonResults = response.data.results;

        const detailedPokemons = await Promise.all(
          pokemonResults.map(async (pokemon) => {
            const pokemonDetail = await axios.get(pokemon.url);
            return pokemonDetail.data;
          })
        );

        setPokemons(detailedPokemons);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return [pokemons, loading, error];
};
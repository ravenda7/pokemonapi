import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"
import { useCustomReactQuery } from "@/lib/utils";
import { lazy, Suspense, useState } from 'react';
import Loader from '@/assets/loader.json';
import NotFoundLoader from '@/assets/notFoundAnimation.json';

const Lottie = lazy(() => import('lottie-react'));

const Box = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const onAnimationComplete = () => {
    setIsPlaying(false); 
  };

  const [pokemons, loading, error] = useCustomReactQuery('https://pokeapi.co/api/v2/pokemon?limit=100');


  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center pt-20">
        <Suspense>
          <Lottie
            autoPlay={isPlaying}
            loop={!isPlaying}
            animationData={Loader}
            onComplete={onAnimationComplete}
            style={{ width: '200px', height: '200px' }} 
          />
          <h1 className="font-rubik text-xl font-semibold text-slate-500">Loading...</h1>
        </Suspense>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center pt-20">
        <Suspense>
          <Lottie
            autoPlay={isPlaying}
            loop={!isPlaying}
            animationData={NotFoundLoader}
            onComplete={onAnimationComplete}
            style={{ width: '200px', height: '200px' }} 
          />
          <h1 className="font-rubik text-xl font-semibold text-slate-500">Something went wrong.</h1>
        </Suspense>
      </div>
    )
  }

    return(
        <>
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            className="w-full md:w-[28%] lg:w-[20%] cursor-pointer h-40 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex justify-center flex-col items-center"
          >
            <CardContent className="pt-4 flex flex-col justify-center items-center">
              {pokemon.sprites?.front_default ? (
                <img className="w-28" src={pokemon.sprites.front_default} alt={pokemon.name} />
              ) : (
                <p>No image available</p>
              )}
              <CardTitle>{pokemon.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </>
    )
}

export default Box;
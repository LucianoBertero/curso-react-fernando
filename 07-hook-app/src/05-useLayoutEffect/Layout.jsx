import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  console.log(data);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Quotes</h1>
      <hr />

      {isLoading ? <Quote author={author} quote={quote}></Quote> : null}

      <button onClick={() => increment()} className="btn btn-primary mt-2">
        Next Quote
      </button>
    </>
  );
};

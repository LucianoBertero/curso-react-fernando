import { useLayoutEffect, useRef } from "react";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
  }, [quote]);

  return (
    <blockquote className="blockquote text-end" style={{ display: "flex" }}>
      <p ref={pRef} className="mb-1">
        {quote}
      </p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};

import { memo } from "react";
import Reacts from "react";

export const Small = memo(({ value }) => {
  console.log("Me volvi a generar");

  return <small>{value}</small>;
});

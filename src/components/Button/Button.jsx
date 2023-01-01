import React from "react";
import { Button } from "./ButtonStyle.js";

export const Buttons = ({ text, inactive }) => {
  return <Button inactive={inactive}>{text}</Button>;
};

export const LightButton = ({ text, inactive }) => {
  return (
    <Button hover="light" color="light" inactive={inactive}>
      {text}
    </Button>
  );
};

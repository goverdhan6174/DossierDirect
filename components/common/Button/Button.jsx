import { useRef } from "react";

const Avatar = ({}) => {
  let ref = useRef();

  return (
    <div
      className="inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear"
    >
      {/* Add an image - We're generating a gradient as placeholder  <img></img> */}
    </div>
  );
};

export default Avatar;

import React from "react";

interface PropTypes {
  img: string;
}

const ThreeRenderer: React.FC<PropTypes> = ({
  img = "/images/3D/Room_001.jpg",
  ...props
}) => {
  return (
    <div>
      <img style={{ width: "100%" }} src={img} alt={img.split("/").pop()} />
    </div>
  );
};

export default ThreeRenderer;

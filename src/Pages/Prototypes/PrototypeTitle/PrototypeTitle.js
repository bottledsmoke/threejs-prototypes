import { white } from "colors.module.css";

export default function PrototypeTitle(props) {
  return (
    <>
      <h1
        style={{
          position: "absolute",
          top: "1rem",
          left: "2.25rem",
          zIndex: 10,
          userSelect: "none",
          ...props.style,
        }}
        className={white}
        {...props}
      >
        {props.children}
      </h1>
    </>
  );
}

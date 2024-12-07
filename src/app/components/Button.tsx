"use client";

type Props = {
  onClick: () => void;
  label: string;
  buttonColor: string;
};
export const Button = ({ onClick, label, buttonColor }: Props) => {
  return (
    <button
      style={{
        backgroundColor: buttonColor,
        width: "350px",
        height: "100px",
        borderRadius: "100px",
      }}
      onClick={() => onClick}
    >
      {" "}
      <p
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
        }}
      >
        {label}
      </p>
    </button>
  );
};

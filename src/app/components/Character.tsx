import Image from "next/image";
export const Character = () => {
  return (
    <Image
      src="/yourcat.png"
      alt="Character Image"
      width={450}
      height={151}
      style={{position:"absolute",top:"20%",left:"44.5%",zIndex:1000}}
    />
  );
};

// export const Stage = () => {
// 	return <div>Stage</div>;
// };
import Image from "next/image";

// export const Stage = () => {
//   return (
//     <div >
//      <Image src="/stage.png" alt="Stage Image" style={{width:"525px",height:"151px"}}/>
//     </div>
//   );
// };
export default function Page() {
  return (
    <div style={{ width: '525px', height: '151px' }}>
      <Image
        src="/stage.png"
        alt="Stage Image"
        layout="intrinsic" // アスペクト比を維持
        style={{ objectFit: 'contain' }} // 必要ならobjectFitで調整
      />
    </div>
  );
}
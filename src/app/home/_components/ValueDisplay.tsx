type Props = {
  amount: number ;
  measure: string;
};


const ValueDisplay = ({amount,measure}:Props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        position: 'relative',
        background: '#f0f0f0',
				boxShadow: 'inset 7px 7px 4px rgba(0, 0, 0, 0.15)',
        borderRadius: '30px',
        width: '224px',
        height: '60px', 
      }}
    >
      {/* 数値部分 */}
      <span
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#606060',
          marginRight: '5px',
        }}
      >
        {amount}
      </span>
      {/* 単位部分 */}
      <span
        style={{
          fontSize: '15px',
					fontWeight: 'bold',
          color: '#606060',
          position: 'absolute', 
          right: '20px',
          bottom: '10px',
        }}
      >
        {measure}
      </span>
    </div>
  );
};

export default ValueDisplay;


import Snowfall from 'react-snowfall';

const SnowfallEffect = () => {
  return (
    <div  className='bg-black w-full h-full  bg-cover'>
      {/* Este es el componente que genera el efecto de nieve */}
      <Snowfall
        color="#74b2e8"  // Color de la nieve
        snowflakeCount={200}  // Número de copos de nieve
         // Velocidad de caída de la nieve
      />

    </div>
  );
};

export default SnowfallEffect;

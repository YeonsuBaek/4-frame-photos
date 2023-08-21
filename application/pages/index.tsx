import Buttons from '@/components/layouts/Buttons';
import Title from '@/components/Assets/Title';

function Home() {
  return (
    <div className='relative w-screen h-screen md:left-[50%] md:translate-x-[-50%] md:w-[480px] lg:w-[640px]'>
      <Title />
      <Buttons />
    </div>
  );
}

export default Home;

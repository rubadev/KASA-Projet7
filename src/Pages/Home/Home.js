import { TittleImage ,CardsLocation } from '../../Sections/index'
import './Home.css'
import image from '../../images/IMG.png'


const Home = () => {
  return(
    <>
    <div className='accueilImage'>
      <TittleImage img={image} text='Chez vous, partout et ailleurs'/>
    </div>
    <CardsLocation/>
    </>
  )
};

export default Home;
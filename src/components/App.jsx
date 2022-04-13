import '../styles/App.css';
import React from 'react';
import Portafolio from '../pages/Portafolio';
import IntroMain from '../containers/IntroMain';
import Header from '../containers/header';
import My from './My';
import AboutMe from '../components/AboutMe';
import MyEducation from '../containers/MyEducation';
import MyProyects from '../containers/MyProyects';
import Proyects from './Proyects';
import Contac from '../containers/Contac';
import Modal from '../containers/modal';
import { useMedia } from 'react-with-media';


function App() {
 const [modal, setModal] = React.useState(false);
  const body = document.querySelector('body');
  modal === true ? body.style.overflow = 'hidden' : body.style.overflow = 'auto' 
  const ArregloPracticas = useMedia('(min-width: 600px)')
  const ArregloImagen = useMedia('(min-width: 450px)')
  const ArregloAbout = useMedia('(min-width: 700px)')
  const Arreglo1024 = useMedia('(min-width: 1024px)')
  
  return (
    <Portafolio 
    modal={modal}
    >
      <IntroMain>
        {modal ? 
        <Modal 
          modal={modal} 
          setModal={setModal}/> 
        : null}
        <Header 
          setModal={setModal} 
          modal={modal}
          arreglo1024={Arreglo1024} 
            />
        <My 
          ArregloImagen={ArregloImagen}
          Arreglo1024={Arreglo1024}
        />
        <AboutMe 
          ArregloAbout={ArregloAbout}
        />
      </IntroMain>
      <MyEducation
        Arreglo1024={Arreglo1024}
      />
      <MyProyects>
        <Proyects 
        ArregloPracticas={ArregloPracticas}
        Arreglo1024={Arreglo1024}
        />
      </MyProyects>
      <Contac/>
    </Portafolio>
  );
}

export default App;

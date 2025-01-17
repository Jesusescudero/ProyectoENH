import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/Imagen1.jpg'; // Importa la imagen
import logo2 from '../assets/Imagen2.png'; // Importa la segunda imagen
import BootstrapCarousel from "../Components/Carousel";
import '../styles/Home.css'; // Asegúrate de crear y usar este archivo CSS


const Home = () => {
    return (
        <div>
            {/* Header con el nombre de la escuela y los logos */}
            <header className="header">
                <img src={logo1} alt="Logo 1" className="logo1" />
                <div className="school-info">
                    <h1>ESCUELA NORMAL "DE LAS HUASTECAS"</h1>
                    <p>CURSO:  CIENCIAS NATURALES. SU APRENDIZAJE Y SU ENSEÑANZA</p>
                </div>
                <img src={logo2} alt="Logo 2" className="logo2" />
            </header>

            {/* Presentación del equipo */}
             <section className="mb-5">
        <h2 className="text-center">Integrantes del equipo</h2>
        <ul className="list-unstyled text-center mt-4">
        <li>ARIADNA PALACIOS HERNÁNDEZ</li>
          <li>XERENI BADILLO HERNÁNDEZ</li>
          <li>MARÍA DEL CIELO HERNÁNDEZ HERNÁNDEZ</li>
          <li>FERNANDA LÓPEZ SÁNCHEZ</li>
          <li>FÁTIMA MOJICA ARGUELLES</li>
          <li>CHRISTOPHER ESCUDERO REYES</li>
        </ul>
        <p className="text-center mt-3"><strong>COORDINADOR:</strong> JAIME FLORES HERNANDEZ</p>
        <p className="text-center"><strong>CURSO:</strong> CIENCIAS NATURALES. SU APRENDIZAJE Y SU ENSEÑANZA</p>
        <BootstrapCarousel />
      </section>

            {/* Resumen de las secciones */}
            <main className="card-container">
            <div className="card">
                    <h3>SECCIÓN 1. DIAGNÓSTICO DE LA COMUNIDAD E INSTITUCIONAL</h3>
                    <ul>
                        <li>
                            <Link to="https://drive.google.com/file/d/1AVWntQ9V5u4DmqV1RrSHnvLXsMC9NQ37/view?usp=sharing">DIAGNÓSTICO DE LA COMUNIDAD E INSTITUCIONAL</Link>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <h3>SECCIÓN 2. ¿Qué es esa cosa llamada ciencia? </h3>
                    <ul>
                        <li>
                            <Link to="https://drive.google.com/file/d/1aBGWJAe5Xg5NKB094LaBX3fHw3JqoYGL/view?usp=sharing">¿Qué es esa cosa llamada ciencia?</Link>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <h3>SECCIÓN 3. YO, TÚ, NOSOTROS Y LA CIENCIA</h3>
                    <ul>
                        <li>
                            <Link to="https://drive.google.com/file/d/1RUKeW26nh3HvBHPqZHawpMEEzsv1NTcV/view?usp=sharing">YO, TÚ, NOSOTROS Y LA CIENCIA</Link>
                        </li>
                    </ul>
                </div>
                {/* Tarjeta de Experimentos con puntos y enlaces */}
                <div className="card">
                    <h3>Sección 4: EXPLICAR LA CIENCIA SÍ, PERO CÓMO… (EXPERIMENTOS)</h3>
                    <ul>
                        <li>
                            <Link to="https://drive.google.com/file/d/1CY_QZUKuQjVVyJ9RM2mNuio7Ou7w0JRc/view?usp=sharing">Experimento 1: Ascensor hidráulico</Link>
                        </li>
                        <li>
                            <Link to="https://drive.google.com/file/d/1oWbfuGiPHwvEYmc9RHPq4ub5K7wK1pEc/view?usp=sharing">Experimento 2: Campo Magnetico</Link>
                        </li>
                        <li>
                            <Link to="https://drive.google.com/file/d/1uMqBHXAA3TKxpQ1o7QvbO5nN8jPE5la3/view?usp=sharing">Experimento 3: Combustión del etanol</Link>
                        </li>
                        <li>
                            <Link to="https://drive.google.com/file/d/1vvllYDJjPAKi0jsg6q4DjtsEgspqdi9p/view?usp=sharing">Experimento 4: Densidad del huevo</Link>
                        </li>
                        <li>
                            <Link to="https://drive.google.com/file/d/1Gxzxk7KvvUUenEG8l0BdXkGoKy8cKM5j/view?usp=sharing">Experimento 5: Fluido no newtoniano</Link>
                        </li>
                        <li>
                            <Link to="https://drive.google.com/file/d/1dBfTMWrh7NROLFf1O9iPRGp5ziMwCSwT/view?usp=sharing">Experimento 6: La serpiente del faraón</Link>
                        </li>
                        <li>
                            <Link to="https://drive.google.com/file/d/1_86SgriKC1ANJ9saDy8BDSzsxxWmfSgV/view?usp=sharing">Experimento 7: Vela que hace subir el agua</Link>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <h3>SECCIÓN 5. INDICADORES E INFORME DE LA JORNADA 1 </h3>
                    <ul>
                        <li>
                            <Link to="https://drive.google.com/file/d/1o4-zncjtOQCMc_LwXc1IOZNbyFIb-rWA/view?usp=sharing">INDICADORES E INFORME DE LA JORNADA 1</Link>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <h3>SECCIÓN 6. PROYECTO E INFORME DE LA JORNADA 2  </h3>
                    <ul>
                        <li>
                            <Link to="https://drive.google.com/file/d/1dxbPFj7aC-y3Ym5jVC-W29jSRQkCAJcM/view?usp=sharing">INDICADORES E INFORME DE LA JORNADA 2</Link>
                        </li>
                    </ul>
                </div>
            </main>

            <footer className="footer">
                <p>Este proyecto fue desarrollado como parte del curso: <strong>Ciencias Naturales. Su aprendizaje y su enseñanza</strong>.</p>
                
                <p>&copy; 2025 Escuela Normal de las Huastecas.</p>
            </footer>


        </div>
    );
};

export default Home;

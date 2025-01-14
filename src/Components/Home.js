import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/Imagen1.jpg'; // Importa la imagen
import logo2 from '../assets/Imagen2.png'; // Importa la segunda imagen
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
          <li>CHRISTOPHER ESCUDERO REYES</li>
          <li>XERENI BADILLO HERNANDEZ</li>
          <li>MARÍA DEL CIELO HERNÁNDEZ HERNÁNDEZ</li>
          <li>FERNANDA LÓPEZ SÁNCHEZ</li>
          <li>FÁTIMA MOJICA ARGUELLES</li>
          <li>ARIADNA PALACIOS HERNANDEZ</li>
        </ul>
        <p className="text-center mt-3"><strong>COORDINADOR:</strong> JAIME FLORES HERNANDEZ</p>
        <p className="text-center"><strong>CURSO:</strong> CIENCIAS NATURALES. SU APRENDIZAJE Y SU ENSEÑANZA</p>
      </section>

            {/* Resumen de las secciones */}
            <main className="card-container">
                <Link to="/diagnostico" className="card">
                    <h3>Sección 1: DIAGNÓSTICO DE LA COMUNIDAD E INSTITUCIONAL</h3>
                    <p>Una mirada a las características y necesidades de la comunidad e institución.</p>
                </Link>
                <div className="card">
                    <h3>SECCIÓN 2. ¿Qué es esa cosa llamada ciencia? </h3>
                    <ul>
                        <li>
                            <Link to="https://drive.google.com/file/d/1LCcSI87cgInvX7Hg_om7HNyGw0DNwRIu/view?usp=sharing">¿Qué es esa cosa llamada ciencia?</Link>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <h3>SECCIÓN 3. YO, TÚ, NOSOTROS Y LA CIENCIA</h3>
                    <ul>
                        <li>
                            <Link to="https://drive.google.com/file/d/1loHrcuQAooTpKoAdLQPEq9M0pYsnfA8r/view?usp=sharing">YO, TÚ, NOSOTROS Y LA CIENCIA</Link>
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

            <footer class="footer">
                <p>Este proyecto fue desarrollado como parte del curso: <strong>Ciencias Naturales. Su aprendizaje y su enseñanza</strong>.</p>
                
                <p>&copy; 2025 Escuela Normal de las Huastecas.</p>
            </footer>


        </div>
    );
};

export default Home;

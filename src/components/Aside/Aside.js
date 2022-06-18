import './Aside.css'
import React from 'react';
import { Link } from 'react-router-dom'


function Aside() {
  return (
    <aside>
    <div class="cont-menu">

        <div class="cont-enlace">

            <div class="opcion">
                <Link to="/Recursos">
                <p class="p-container">Tecnología e informática +</p>
                </Link>
            </div>

        </div>

        <div class="cont-enlace">

            <div class="opcion">
            <Link to="/RecursosMa">
                <p class="p-container">Matemáticas +</p>
                </Link>
            </div>


        </div>

        <div class="cont-enlace">

            <div class="opcion">
            <Link to="/RecursosAR">
                <p class="p-container">Arte + </p>
                </Link>
            </div>

        </div>
        <div class="cont-enlace">

            <div class="opcion">
            <Link to="/RecursosCI">
                <p class="p-container">Ciencias + </p>
                </Link>
            </div>

        </div>

        <div class="cont-enlace">

            <div class="opcion">
            <Link to="/RecursosING">
                <p class="p-container">Ingeniería + </p>
                </Link>
            </div>

        </div>

    </div>
    
    </aside>
  );
}
export default Aside
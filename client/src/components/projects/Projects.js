import React from 'react';

// components
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import FormTask from '../tasks/FormTask';

const Projects = () => {
    return ( 
    <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
            <Navbar />
            <main>
                <FormTask />
                <div className="contenedor-tareas">

                </div>
            </main>
        </div>
    </div> );
}
 
export default Projects;
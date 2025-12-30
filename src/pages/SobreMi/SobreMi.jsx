import './SobreMi.css'

const SobreMi = () => {
    return (
        <main className="pagina-sobre-mi">

            <header className="encabezado-sobre-mi">
                <h1>Conociendo a Patri Lago</h1>
                <p className="subtitulo-sobre-mi">
                    Desarrolladora frontend enfocada en proyectos claros, escalables y usables
                </p>
            </header>

            <article className="introduccion-sobre-mi">
                <p>
                    Mi nombre es <span>Patri Lago</span> y soy desarrolladora frontend con interés en crear aplicaciones claras, funcionales y bien pensadas. Disfruto entendiendo la lógica detrás del código y transformando ideas en productos digitales usables y coherentes.
                </p>

                <p>
                    Este proyecto nace de un interés personal por la lectura y de la inspiración en plataformas como Goodreads. Surge como una aplicación personal para gestionar lecturas y descubrimientos, y al mismo tiempo como una forma de seguir consolidando mis conocimientos en <span>React</span> y en el consumo de <span>APIs</span>.
                </p>

                <p>
                    Actualmente la aplicación se centra en un <span>CRUD básico</span> utilizando datos de una API externa, pero está pensada para <span>escalar progresivamente</span> hacia un backend propio con gestión de usuarios, perfiles y funcionalidades más avanzadas. Mi objetivo es desarrollar una experiencia cuidada a nivel estético, usable y con una base técnica sólida que refleje una forma de trabajar profesional.
                </p>
            </article>

            <section className="informacion-proyecto">
                <div className="item-informacion">
                    <h4>Tecnologías</h4>
                    <div className="badges">
                        <span className="etiqueta">React</span>
                        <span className="etiqueta">Fetch</span>
                        <span className="etiqueta">API REST</span>
                    </div>
                </div>

                <div className="item-informacion">
                    <h4>Estado</h4>
                    <p>PMV (Producto Mínimo Viable)</p>
                </div>

                <div className="item-informacion">
                    <h4>Próximos pasos</h4>
                    <div className="badges">
                        <span className="etiqueta">Autenticación</span>
                        <span className="etiqueta">Backend propio</span>
                        <span className="etiqueta">Perfiles de usuario</span>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default SobreMi

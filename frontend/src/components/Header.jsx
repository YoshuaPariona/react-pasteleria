export const Header = () => {
    return (

        <header className="
            bg-amber-600
            bg-cover bg-center px-8 py-6
            text-white text-center
            ">
            <nav className="
                flex justify-between items-center">
                <div className="flex flex-row items-center gap-15">
                    <img
                        src="src/assets/logo.webp"
                        className="w-32 h-32 rounded-full border-2 border-white" />
                    <h1 className="text-5xl font-bold">Panadería D'Boyos</h1>
                </div>
                <ul className="menu flex gap-5 text-3xl">
                    <li><a className="hover:pointer-coarse:" href="/" >Inicio</a></li>
                    <li><a className="hover:pointer-coarse:" href="/productos">Productos</a></li>
                    <li><a className="hover:pointer-coarse:" href="/nosotros">Nosotros</a></li>
                    {/* <li><a className="" href="/acceder">Iniciar Sesión</a></li>
                    <li><a className="" href="/registrarse">Registrarse</a></li> */}


                </ul>
            </nav>
        </header>
    )
}
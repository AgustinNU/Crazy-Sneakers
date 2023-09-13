import Brand from "./Brand";
import CartContainer from "./CartContainer";
import CategoryItem from "./CategoryItem";
import MenuButton from "./MenuButton";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Brand />
            <MenuButton />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <CategoryItem isActive={true} name="Inicio" />
                    </li>
                    <li className="nav-item">
                    <CategoryItem isActive={false} name="Tienda" />
                    </li>
                    <li className="nav-item">
                    <CategoryItem isActive={false} name="Contacto" />
                    </li>
                    <li className="nav-item">
                    <CategoryItem isActive={false} name="Sobre Nosotros" />
                    </li>
                </ul>
            </div>
            <CartContainer />
        </div>
    </nav>
    );
};

export default Navbar;
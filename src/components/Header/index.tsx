import Button from '../Button';
import Menu from '../Menu';
import LogoDesktop from '../SVG/LogoDesktop';
import './style.css';

function Header() {
    return (
        <header className="container-header">
            <LogoDesktop />
            <Menu />
            <Button />
        </header>
    );
}

export default Header;
import Nav from '../navigation/Nav'
import MobileNav from '../navigation/MobileNav'

const Header = () => {
    return (
        <header className="header-nav sticky top-0 bg-advancedDarkBlue text-white h-20 flex items-center">
            <Nav className="hidden md:block"/>
            <MobileNav className="block md:hidden"/>
        </header>
    )
}

export default Header
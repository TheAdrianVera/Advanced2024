import Nav from './Nav'
import MobileNav from './MobileNav'

function Header () {
    return (
        <header className="sticky top-0 bg-advancedDarkBlue text-white h-20 flex items-center">
            <Nav className="hidden md:block"/>
            <MobileNav className="block md:hidden"/>
        </header>
    )
}

export default Header
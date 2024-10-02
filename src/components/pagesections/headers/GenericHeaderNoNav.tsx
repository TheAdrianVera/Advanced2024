import NavJustHome from '../navigation/NavJustHome'

const GenericHeaderNoNav = () => {
    return (
        <header className="header-nav sticky top-0 bg-advancedDarkBlue text-white h-20 flex items-center">
            <NavJustHome />
        </header>
    )
}

export default GenericHeaderNoNav
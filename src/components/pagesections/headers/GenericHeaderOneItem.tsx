import NavCareerOpenings from "../navigation/NavCareerOpenings"

const GenericHeaderOneItem: React.FC = () => {
    return (
        <header className="header-nav sticky top-0 bg-advancedDarkBlue text-white h-20 flex items-center">
            <NavCareerOpenings />
        </header>
    )
}

export default GenericHeaderOneItem
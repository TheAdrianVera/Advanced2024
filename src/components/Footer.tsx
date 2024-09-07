const Footer = () => {
    return (
        <footer className="bg-advancedDarkBlue text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Advanced Healthcare LLC. All rights reserved. Web Dev: <a href="https://www.adriangvera.com" target="_blank" className="text-white hover:text-blue-300">adriangvera.com</a></p>
            </div>
        </footer>
    )
}

export default Footer
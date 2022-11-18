const Footer = () => {

    return (
        <div className="container mx-auto">
        <footer className="flex flex-wrap flex-col items-center px-4 py-6 text-sm text-gray-700 border-t">
            <div className="text-center">© 2022  <a href="#" className="text-gray-700 hover:underline" 
            target="_blank">CineServer</a></div>
            <div className="mx-auto mb-3 text-center">
                <a  target="_blank" className="inline-block mt-4 mx-3 text-blue-700 hover:underline">Terms</a>
                <a  target="_blank" className="inline-block mt-4 mx-3 text-blue-700 hover:underline">Privacy Policy</a>
                <a  className="inline-block mt-4 mx-3 text-blue-700 hover:underline">Licenses</a>
                <a  target="_blank" className="inline-block mt-4 mx-3 text-blue-700 hover:underline">Support</a>
                <a  className="inline-block mt-4 mx-3 text-blue-700 hover:underline">Components</a>
                <a  className="inline-block mt-4 mx-3 text-blue-700 hover:underline">Templates</a>
                <a className="inline-block mt-4 mx-3 text-blue-700 hover:underline">Tailwind CSS</a>
            </div>
            <p className="w-full mt-2 mb-2 text-center text-gray-700">Tailwind Builder is a product of <a href="">Shuffle</a> and is not affiliated with Tailwind CSS or Tailwind Labs.</p>
            <p className="w-full mt-2 mb-2 text-center"><a className="text-blue-600 hover:underline">Switch to the Tailwind Editor by Shuffle<sup> <i className="icon-link-ext"></i></sup></a></p>
        </footer>
    </div>
    )
}

export default  Footer;
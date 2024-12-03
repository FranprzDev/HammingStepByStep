export default function Footer() {
    const date = new Date();
    return (
        <footer className="bg-gray-800 shadow mt-auto w-full">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-xl text-gray-400 sm:text-center">© {date.getFullYear()} <a href="https://franperez.vercel.app" className="hover:underline text-xl">Francisco Miguel Perez</a></span>
                <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-400 sm:mt-0">
                    <li>
                        <p className="text-xl">Comunicaciones - 3K2 - Ing. Carrasco</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
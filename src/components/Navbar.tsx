export default function Navbar() {
    return (
        <nav className="bg-gray-800 rounded-lg shadow m-4">
            <div className="text-sm text-gray-400 w-full mx-auto max-w-screen-xl p-4">
                <span className="font-semibold flex justify-evenly">
                    <h1 className="font-extrabold flex justify-center">
                        WAR MANAGER
                    </h1>
                    <a href="#" className="hover:underline">
                        RECRUIT
                    </a>
                    <a href="#" className="hover:underline">
                        ARM
                    </a>
                    <a href="#" className="hover:underline">
                        FIGHT
                    </a>
                </span>
            </div>
        </nav>
    );
}

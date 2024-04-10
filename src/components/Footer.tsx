export default function Footer() {
    return (
        <footer className="bg-gray-800 rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-400 sm:text-center ">
                    Created by{" "}
                    <a
                        href="https://github.com/lokiaus/"
                        className="hover:underline"
                    >
                        lokiaus
                    </a>
                    .
                </span>
            </div>
        </footer>
    );
}

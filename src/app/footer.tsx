import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#224081] rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <a
          href="/Luis_Belis_CV.pdf"
          download="Luis_Belis_CV.pdf"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Download CV
        </a>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="whiteColor">
            <Link target="_blank" href="https://www.linkedin.com/in/luis-belis-755426186/">
              <FaLinkedin className="text-3xl" />
            </Link>
          </li>
          <li className="p-6 whiteColor">
            <Link target="_blank" href="https://github.com/zeratul117">
              <FaGithub className="text-3xl" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
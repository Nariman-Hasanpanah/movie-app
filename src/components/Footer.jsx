import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 pb-5 md:pb-6 px-10 flex flex-col content-center items-center">
      <div className="flex flex-col content-between items-center gap-3 mb-5 mt-4 lg:flex-row lg:gap-100 text-white">
        <div className="">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 dark:text-yellow-400">
            NHP-MOVIE
          </h1>
        </div>

        <div className="flex gap-8 md:gap-12 text-black dark:text-gray-100">
          <a
            href="https://www.linkedin.com/in/nariman-hasan-panah-7b1897308"
            title="Linkdin"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl hover:opacity-60">
              <AiFillLinkedin />
            </h1>
          </a>
          <a href="https://github.com/Nariman-Hasanpanah" title="Github">
            <h1 className="text-3xl md:text-4xl lg:text-5xl hover:opacity-60">
              <AiFillGithub />
            </h1>
          </a>
        </div>
      </div>
      <p className="text-sm text-center text-black dark:text-white">
        Created by Nariman Hasanpanah 2026 ©
      </p>
      <div className="text-xs md:text-md text-black dark:text-white text-center mt-5 mx-1 lg:mx-40 ">
        <p>
          Disclaimer: The content presented on this website is intended for
          educational purposes only. All rights and copyrights to the original
          owners and creators of the materials are duly acknowledged and
          respected. This website does not claim ownership or endorse any
          unauthorized use of copyrighted content.
        </p>
      </div>
    </div>
  );
}

export default Footer;

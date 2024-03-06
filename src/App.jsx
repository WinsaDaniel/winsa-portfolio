import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, Element } from "react-scroll";

function App() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-teal-600">
      <div className="bg-teal-600">
        <div className="w-full text-stone-100 bg-teal-600 dark-mode:text-stone-200 dark-mode:bg-gray-800">
          <div className="flex flex-row  max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 ">
            <div className="p-4 flex flex-col items-center justify-between">
              {/* <a
                href="#"
                className="text-lg font-semibold tracking-widest text-stone-100 uppercase dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Winsa Daniel Frontend developer
              </a> */}
              <header className="md:text-lg text-xs font-semibold  text-stone-100 uppercase">
                {" "}
                Winsa Daniel
              </header>
              <h2 className="md:text-md text-xs font-semibold  text-stone-100 uppercase ">
                Frontend developer
              </h2>
              <button
                className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                onClick={toggleMenu}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d={
                      open
                        ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        : "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    }
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col flex-grow pb-4 md:pb-0 ${
                open ? "flex" : "hidden"
              } md:flex md:justify-end md:flex-row`}
            >
              <Link
                to="about"
                smooth={true}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Skills
              </Link>
              <Link
                to="project"
                smooth={true}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Project
              </Link>
              <Link
                to="contact"
                smooth={true}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <main className="text-teal-800 bg-green-100">
        <div className="border-t-4 border-teal-800 mt-3 pt-3"></div>
        <Element id="about">
          <h1 className="bold text-sm  *:text-stone-100 font-roboto md:text-lg text-teal-900 mb-2 mt-7 capitalize  text-center">
            ABOUT ME{" "}
          </h1>
          <div className="flex justify-center mb-4 ">
            <p className="mx-auto max-w-[90%] text-sm space-x-0 gap-1 font-normal  tracking-wide   md:leading-relaxed md:max-w-[85%]  lg:max-w-[75%]  text-teal-900 ">
              Hey there! My name is Winsa Daniel, I am a front-end developer,
              and my role revolves around crafting the look, feel, and
              functionality of websites and web applications that users interact
              with directly. I specialize in bringing designs to life, ensuring
              they are not just visually appealing but also intuitive and
              engaging to use.
            </p>
          </div>

          <div className="flex justify-center mb-5">
            <button className=" rounded-lg text-stone-100 bg-teal-800 mx-3 my-3 px-3 py-2 w-50  ">
              {" "}
              <a
                href="../public/winsa.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open CV
              </a>
            </button>
          </div>
        </Element>

        <Element id="project">
          <h1 className="font-roboto text-sm md:text-lg text-teal-800 text-center mt-9  mb-2">
            PROJECTS
          </h1>
          <p className="font-roboto text-sm text-teal-900 text-center mb-4  ">
            hello again , these are among the websites I worked on, for more
            click on gitHub icon below
          </p>
          <div className="flex justify-center mb-5">
            <a
              href="https://github.com/WinsaDaniel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="radix-icons:github-logo"
                width="64"
                height="64"
                href="https://github.com/WinsaDaniel"
                //style={{ color: "rgb(141, 34, 34)" }}
              />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mx-4 ml-7 ">
            <div className="   justify-center ">
              <div className="max-w-md  rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="../public/images/Capture.PNG"
                    alt="CAPTURE"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      className=" rounded-full"
                      src="../public/images/Screenshot1.png"
                      alt=""
                    />
                    <h1 className="text-xs md:text-xs text-teal-800 font-bold">
                      World wise 🌍
                    </h1>
                    <a
                      href="https://github.com/WinsaDaniel/worldwise1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        icon="radix-icons:github-logo"
                        width="32"
                        height="32"
                        href="https://github.com/WinsaDaniel/worldwise1"

                        // style={{ color: rgb(255, 255, 255) }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-screen  ">
              <div className="max-w-md  rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="../public/images/Screenshot1 .png"
                    alt="Dog"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <img className=" rounded-full" src="" alt="" />
                    <h1 className="text-xs md:text-xs text-teal-800 font-bold">
                      Pizza Menu 🍕
                    </h1>
                    <a
                      href="https://github.com/WinsaDaniel/Fast-pizza"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        icon="radix-icons:github-logo"
                        width="32"
                        height="32"
                        href="https://github.com/WinsaDaniel/Fast-pizza"

                        // style={{ color: rgb(255, 255, 255) }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-screen  ">
              <div className="max-w-md  rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="../public/images/laptop.jpg"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-xs md:text-xs text-teal-800 font-bold">
                      Popcorn 🍿
                    </h1>
                    <a
                      href="https://github.com/WinsaDaniel/usePopCorn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        icon="radix-icons:github-logo"
                        width="32"
                        height="32"
                        href="https://github.com/WinsaDaniel/usePopCorn"

                        // style={{ color: rgb(255, 255, 255) }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>

        <Element id="skills">
          <h1 className="font-roboto md:text-lg text-teal-800 text-center mt-7 mb-1 text-sm">
            MY SKILLS
          </h1>
          <p className="  text-sm text-teal-800 text-center mb-1 ">
            I have been learning and working on these skills to boost my
            knowledge on website development
          </p>

          <div className="flex flex-wrap mx-auto max-w-[90%] text-xs font-normal  tracking-wide   md:leading-relaxed md:max-w-[85%]  lg:max-w-[75%]">
            <div className="max-w-xs mx-auto text-center">
              <Icon
                icon="vscode-icons:file-type-js-official"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue">Javascript</h2>
            </div>

            <div className="max-w-xs mx-auto text-center">
              <Icon
                icon="vscode-icons:file-type-reactjs"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue">react.js</h2>
            </div>

            <div className="max-w-xs mx-auto text-center">
              <Icon
                icon="vscode-icons:file-type-tailwind"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue">tailwind</h2>
            </div>
            <div className="max-w-xs mx-auto text-center">
              <Icon
                icon="vscode-icons:file-type-css"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue">CSS</h2>
            </div>

            <div className="max-w-xs mx-auto text-center">
              <Icon
                icon="vscode-icons:file-type-html"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue">HTML</h2>
            </div>

            <div className="max-w-xs mx-auto text-center">
              {" "}
              <Icon
                icon="vscode-icons:folder-type-redux"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue">redux</h2>
            </div>

            <div className="max-w-xs mx-auto text-center">
              <Icon
                icon="vscode-icons:file-type-vite"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue"> vite</h2>
            </div>

            <div className="max-w-xs mx-auto text-center">
              {" "}
              <Icon
                icon="vscode-icons:file-type-styled"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue">styledcomponent</h2>
            </div>

            <div className="max-w-xs mx-auto text-center">
              <Icon
                icon="vscode-icons:folder-type-github"
                width="64"
                height="64"
                className="hover:scale-105 transform transition-all duration-500"
              />
              <h2 className="text-blue">Git Hub</h2>
            </div>
          </div>
        </Element>
        <Element id="contact">
          <div className=" p-8 rounded shadow-md max-w-md w-full mx-auto mt-8 mb-5">
            <h2 className="font-roboto text-sm md:text-lg text-tale-800 text-center mb-5">
              CONTACT ME
            </h2>

            <form
              target="_blank"
              action="https://formsubmit.co/winsadaniel7@gmail.com"
              method="POST"
            >
              {/* Nom et Prénom */}

              <div>
                <label
                  htmlFor="firstName"
                  className="block md:text-sm text-xs font-medium text-tale-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              {/* Adresse email */}
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block md:text-sm text-xs font-medium text-tale-800"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="@gmail.com"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="mt-1 p-2 w-full border rounded-md"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>

              {/* Bouton d'inscription */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full p-3 bg-teal-600 text-white rounded-md hover:bg-blue-600"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </Element>
      </main>
      <div className="pb-3 mt-4 text-xs md:text-sm md:flex md:flex-row md:justify-between text-center md:pl-3 md:mr-3">
        <div>
          <div className="flex flex-row items-center gap-3  justify-center">
            <a
              href="https://www.facebook.com/winsa.daniel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="logos:facebook" width="32" height="32" />
            </a>

            <a
              href="https://twitter.com/winsa_daniel"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Icon
                icon="ri:twitter-x-line"
                width="32"
                height="32"
                // style={{ color: #141111 }}
              />
            </a>

            <a
              href="https://wa.me/+251920346765"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Icon icon="logos:whatsapp-icon" width="32" height="32" />
            </a>

            <a
              href="https://www.linkedin.com/in/winsa-daniel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:linkedin"
                width="32"
                height="32"
                href="https://www.linkedin.com/in/winsa-daniel/"
              />
            </a>

            <a
              href="https://github.com/WinsaDaniel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="radix-icons:github-logo"
                width="32"
                height="32"
                href="https://github.com/WinsaDaniel"

                // style={{ color: rgb(255, 255, 255) }}
              />
            </a>
          </div>
        </div>
        <div>
          {" "}
          <p className=" text-stone-100 text-center ">designed and built by</p>
          <p className="text-yellow-800 text-center mb-1">Winsa Daniel</p>
        </div>
      </div>
    </div>
  );
}

export default App;

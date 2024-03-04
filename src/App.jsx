import { Icon } from "@iconify/react";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-teal-600">
      <div className="bg-teal-600">
        <div className="w-full text-stone-100 bg-teal-600 dark-mode:text-stone-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 ">
            <div className="p-4 flex flex-col items-center justify-between">
              {/* <a
                href="#"
                className="text-lg font-semibold tracking-widest text-stone-100 uppercase dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Winsa Daniel Frontend developer
              </a> */}
              <header className="text-lg font-semibold  text-stone-100 uppercase">
                {" "}
                Winsa Daniel
              </header>
              <h2 className="text-md font-semibold  text-stone-100 uppercase ">
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
              <a
                href="#"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline  "
              >
                About
              </a>
              <a
                href="#"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Skills
              </a>
              <a
                href="#"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Project
              </a>
              <a
                href="#"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Contact
              </a>
              {/* <div className="relative">
                <button
                  className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={toggleMenu}
                >
                  <span>Dropdown</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {open && (
                  <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                    <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                      <a
                        href="#"
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Link #1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Link #2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Link #3
                      </a>
                    </div>
                  </div>
                )}
              </div> */}
            </nav>
          </div>
        </div>
      </div>
      <main className="text-teal-800 bg-green-100">
        <hr className="bg-teal-600" />
        <h1 className="bold   *:text-stone-100 font-roboto text-lg text-teal-800 mb-5 underline  text-center">
          About Me
        </h1>
        <div className="flex justify-center mb-5">
          <p className=" mt-4 text-teal-800  px-10  font-roboto flex justify-items-center sm:ml-1 sm:mr-1   ">
            Hey there! I am a front-end developer, and my role revolves around
            crafting the look, feel, and functionality of websites and web
            applications that users interact with directly. I specialize in
            bringing designs to life, ensuring they are not just visually
            appealing but also intuitive and engaging to use.
          </p>
          {/* <img src="../images/winsa.jpg" /> */}
        </div>

        <div className="flex justify-center mb-5">
          <button className="bg-teal-600 hover:bg-teal-700 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download cv</span>
          </button>
        </div>

        <h1 className="font-roboto text-lg text-teal-800 text-center mb-5 underline">
          Skills
        </h1>
        <p className=" text-sm text-teal-800 text-center mb-5 ">
          I have been learning and working on these skills to boost my knowledge
          on website development
        </p>

        <div className="flex flex-wrap text-center justify-center mb-5">
          <div className="max-w-xs mx-auto text-center">
            <Icon
              icon="vscode-icons:file-type-js-official"
              width="120"
              height="128"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue">Javascript</h2>
          </div>

          <div className="max-w-xs mx-auto text-center">
            <Icon
              icon="vscode-icons:file-type-reactjs"
              width="120"
              height="120"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue">react.js</h2>
          </div>

          <div className="max-w-xs mx-auto text-center">
            <Icon
              icon="vscode-icons:file-type-tailwind"
              width="120"
              height="120"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue">tailwind</h2>
          </div>
          <div className="max-w-xs mx-auto text-center">
            <Icon
              icon="vscode-icons:file-type-css"
              width="120"
              height="128"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue">CSS</h2>
          </div>

          <div>
            <Icon
              icon="vscode-icons:file-type-html"
              width="120"
              height="128"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue">HTML</h2>
          </div>

          <div>
            {" "}
            <Icon
              icon="vscode-icons:folder-type-redux"
              width="120"
              height="128"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue">redux</h2>
          </div>

          <div>
            <Icon
              icon="vscode-icons:file-type-vite"
              width="120"
              height="128"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue"> vite</h2>
          </div>

          <div>
            {" "}
            <Icon
              icon="vscode-icons:file-type-styled"
              width="120"
              height="128"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue">styledcomponent</h2>
          </div>

          <div>
            <Icon
              icon="vscode-icons:folder-type-github"
              width="120"
              height="128"
              className="hover:scale-105 transform transition-all duration-500"
            />
            <h2 className="text-blue">Git Hub</h2>
          </div>
        </div>
        <h1 className="font-roboto text-lg text-teal-800 text-center underline mb-5">
          Projects
        </h1>
        <p className="font-roboto text-sm text-teal-800 text-center mb-5  ">
          hello again , these are among the websites I worked on{" "}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mx-4 ml-7 ">
          <div className="min-h-screen   justify-center ">
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
                    className="h-10 rounded-full"
                    src="../public/images/Screenshot1.png"
                    alt=""
                  />
                  <h1 className="text-sm text-gray-900 font-bold">
                    Felipe Sacudon
                  </h1>
                </div>
                <div className="flex space-x-6 items-center">
                  <div className="flex space-x-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-semibold">20</span>
                  </div>
                  <div className="flex space-x-2 items-center pr-4">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600 hover:text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-semibold">22</span>
                  </div>
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
                  <img className="h-10 rounded-full" src="" alt="" />
                  <h1 className="text-sm text-teal-800 font-bold">
                    Felipe Sacudon
                  </h1>
                </div>
                <div className="flex space-x-6 items-center">
                  <div className="flex space-x-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-semibold">20</span>
                  </div>
                  <div className="flex space-x-2 items-center pr-4">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600 hover:text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-semibold">22</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen  ">
            <div className="max-w-md  rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div className="p-4">
                <img
                  className="rounded-xl"
                  src="../images/laptop.jpg"
                  alt="Dog"
                />
              </div>
              <div className="flex justify-between p-6">
                <div className="flex items-center space-x-4">
                  <img className="h-10 rounded-full" src="" alt="" />
                  <h1 className="text-sm text-gray-900 font-bold">
                    Felipe Sacudon
                  </h1>
                </div>
                <div className="flex space-x-6 items-center">
                  <div className="flex space-x-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-semibold">20</span>
                  </div>
                  <div className="flex space-x-2 items-center pr-4">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600 hover:text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-semibold">22</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className=" justify-center w-50 p-3 bg-teal-600 text-white rounded-md hover:bg-blue-600"
        >
          go to my git Hub
        </button>

        <div className=" p-8 rounded shadow-md max-w-md w-full mx-auto mb-5">
          <h2 className="font-roboto text-lg text-stone-800 text-center underline mb-5">
            contact
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
                className="block text-sm font-medium text-gray-700"
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
                className="block text-sm font-medium text-gray-700"
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

        {/* <div className="container justify-center">
          <h1>FormSubmit Demo</h1>
          <form
            target="_blank"
            action="https://formsubmit.co/winsadaniel7@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block">
              Submit Form
            </button>
          </form>
        </div> */}
      </main>

      <div className="mb-1 mt-4">
        <div className="flex flex-row items-center gap-3  justify-center">
          <Icon icon="logos:facebook" width="32" height="32" />
          <Icon
            icon="ri:twitter-x-line"
            width="32"
            height="32"
            // style={{ color: #141111 }}
          />
          <Icon icon="logos:whatsapp-icon" width="32" height="32" />
          <Icon icon="devicon:linkedin" width="32" height="32" />
          <Icon
            icon="radix-icons:github-logo"
            width="32"
            height="32"
            // style={{ color: rgb(255, 255, 255) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

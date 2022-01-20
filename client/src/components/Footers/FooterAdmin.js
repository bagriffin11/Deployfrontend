import React from "react";
import {useHistory} from "react-router-dom";


export default function FooterAdmin() {

  let history = useHistory();

  const aboutPage = () => {
    history.push("/about");

   }
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()} Deploy Web Automations by{" "}
                <a
                  href="https://www.linkedin.com/in/barret-griffin-3988ba221/"
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                  Barret Griffin
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
   
                <li>
                  <button
                    onClick = {aboutPage}
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <a
                    href="https://github.com/bagriffin11?tab=overview&from=2021-12-01&to=2021-12-31"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

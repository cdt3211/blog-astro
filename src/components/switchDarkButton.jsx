import React, { useEffect } from "react";


export default function SwitchDarkButton() {

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
    }
  };


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <div>
      <svg
        onClick={toggleDarkMode}
        t="1729489885030" className="dark:hidden icon size-10 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16822" >
        <path fill="currentColor" d="M512 981.312A469.632 469.632 0 0 1 42.688 512 469.632 469.632 0 0 1 512 42.688h17.28c18.816 0 36.096 12.544 43.904 31.36a45.76 45.76 0 0 1-12.544 51.84 242.304 242.304 0 0 0-84.736 183.68 241.856 241.856 0 0 0 241.728 241.664c70.656 0 136.576-31.36 183.68-84.736a49.024 49.024 0 0 1 51.776-14.144c18.816 6.272 31.36 23.552 31.36 42.368V512c-3.136 259.008-213.44 469.312-472.448 469.312zM420.928 147.84A375.488 375.488 0 0 0 136.832 512 375.168 375.168 0 0 0 512 887.168a375.488 375.488 0 0 0 364.16-284.16 332.608 332.608 0 0 1-160.128 40.832A336.32 336.32 0 0 1 380.16 307.968c0-56.512 14.08-111.488 40.768-160.128z" p-id="16823"></path>
      </svg>
      <svg
        onClick={toggleDarkMode}
        t="1729490042575" className="icon size-10 hidden dark:block cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17815" width="200" height="200">
        <path fill="currentColor" d="M469.333333 128a42.666667 42.666667 0 0 1 85.333334 0v85.333333a42.666667 42.666667 0 0 1-85.333334 0V128z m0 682.666667a42.666667 42.666667 0 0 1 85.333334 0v85.333333a42.666667 42.666667 0 0 1-85.333334 0v-85.333333z m42.666667-85.333334a213.333333 213.333333 0 1 1 0-426.666666 213.333333 213.333333 0 0 1 0 426.666666z m0-85.333333a128 128 0 1 0 0-256 128 128 0 0 0 0 256z m-384-85.333333a42.666667 42.666667 0 0 1 0-85.333334h85.333333a42.666667 42.666667 0 0 1 0 85.333334H128z m682.666667 0a42.666667 42.666667 0 0 1 0-85.333334h85.333333a42.666667 42.666667 0 0 1 0 85.333334h-85.333333z m-30.165334-371.498667a42.666667 42.666667 0 0 1 60.330667 60.330667l-67.456 67.456a42.666667 42.666667 0 0 1-60.330667-60.330667l67.413334-67.456zM243.498667 840.832a42.666667 42.666667 0 1 1-60.330667-60.330667l67.456-67.456a42.666667 42.666667 0 1 1 60.330667 60.330667l-67.413334 67.456z m-60.330667-597.333333a42.666667 42.666667 0 0 1 60.330667-60.330667l67.456 67.456a42.666667 42.666667 0 0 1-60.330667 60.330667l-67.456-67.413334z m657.664 537.002666a42.666667 42.666667 0 0 1-60.330667 60.330667l-67.456-67.456a42.666667 42.666667 0 0 1 60.330667-60.330667l67.456 67.413334z" p-id="17816"></path>
      </svg>
    </div>
  )
}
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  //state

  //function

  return (
    <div>
      <header>
        <img src="/layoutflow_isolated.png" className="w-20 p-2"/>
      </header>

      <main>
         <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;

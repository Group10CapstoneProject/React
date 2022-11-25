import React from "react";

function Navbar() {
  return (
    <nav className="w-full  sticky h-[70px]  bg-base/80 p-4">
      <ul className="flex gap-x-4 justify-end ">
        <li>Notifikasi</li>
        <li className="">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs">AA</span>
            </div>
          </div>
        </li>
        <li>Muhammad Agil</li>
      </ul>
    </nav>
  );
}

export default Navbar;
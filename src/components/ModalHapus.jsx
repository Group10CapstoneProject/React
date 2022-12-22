import React from "react";

function ModalHapus({ show, data, handleDelete, setShow }) {
  return (
    <>
      <input
        defaultChecked={show}
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <button
              onClick={() => setShow(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="popup-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 text-[#FCC70A] w-14 h-14 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg text-black font-semibold">
                Apakah anda yakin untuk menghapus
              </h3>
              <button
                onClick={(e) => handleDelete(e, data)}
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white bg-prim hover:bg-prim/70  font-medium rounded-lg text-sm inline-flex items-center px-8 py-2 text-center mr-2"
              >
                Ya
              </button>
              <button
                onClick={() => setShow(false)}
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white font-bold bg-dang2 hover:bg-dang2/70 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm  px-8 py-2  "
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalHapus;

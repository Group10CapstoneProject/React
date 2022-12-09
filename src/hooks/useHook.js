import { useState } from "react";

const useHook = () => {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [btn, setBtn] = useState(false);

  return { btn, setBtn, load, setLoad, show, setShow };
};
export default useHook;

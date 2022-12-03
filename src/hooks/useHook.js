import { useState } from "react";

const useHook = () => {
  const [show, setShow] = useState(false);

  return { show, setShow };
};
export default useHook;

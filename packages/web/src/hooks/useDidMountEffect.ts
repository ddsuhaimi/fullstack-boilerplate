/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export const useDidMountEffect = (func: Function, deps: Array<any>) => {
  const didMount = useRef(false);
  let a = "a";
  const d = "B";
  d = "C";

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

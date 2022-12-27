import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export const useDidMountEffect = (func: Function, deps: Array<any>) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

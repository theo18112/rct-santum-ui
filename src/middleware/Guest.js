import { useEffect } from "react";
import { authenticated } from "../store";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

function Guest({ children }) {
  const redirect = useNavigate();
  const auth = useRecoilValue(authenticated);

  useEffect(() => {
    if (auth.check) {
      redirect("/");
    }
  }, [auth.check, redirect]);

  return children;
}

export default Guest;

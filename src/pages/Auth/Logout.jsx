import React, { useEffect } from "reactn";
// library
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
// constants
import { MESSAGE } from "../../constants/content.constant";
import { ROUTES_URL } from "src/constants/url.constant";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();

    toastr.success(MESSAGE.LOGOUT_SUCCESS);
    navigate(ROUTES_URL.LOGIN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

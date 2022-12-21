import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token") || Cookies.get("rt")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  getRefreshToken() {
    return Cookies.get("rt");
  },
  getUserId() {
    return Cookies.get("sub");
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("rt");
    Cookies.remove("data");
    navigate("/login");
  },
  storeUserInfoToCookie(data) {
    if (!data.access || !data.refresh) return null;
    const { access, refresh } = data;
    const accessExpires = new Date(access.expired_at);
    const refreshExpires = new Date(refresh.expired_at);
    Cookies.set("token", access.token, { expires: accessExpires });
    Cookies.set("rt", refresh.token, { expires: refreshExpires });

    return data;
  },
};

export default Auth;
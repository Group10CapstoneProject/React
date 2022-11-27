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
    navigate("/login");
  },
  storeUserInfoToCookie(data) {
    if (!data.access_token || !data.refresh_token) return null;
    const { access_token, refresh_token, sub } = data;
    const accessExpires = new Date(access_token.expires);
    const refreshExpires = new Date(refresh_token.expires);
    Cookies.set("token", access_token, { expires: accessExpires });
    Cookies.set("rt", refresh_token, { expires: refreshExpires });
    Cookies.set("sub", sub, { expires: accessExpires });

    return data;
  },
};

export default Auth;

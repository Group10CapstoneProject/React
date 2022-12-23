import "./App.css";
import "boxicons";
import { SetUpRouters } from "./router/Index";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AltaGym</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SetUpRouters />
    </>
  );
}

export default App;

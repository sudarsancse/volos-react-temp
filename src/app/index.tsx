import {createBrowserRouter, RouterProvider} from "react-router-dom";

// fonts
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

// Styles
import "../assets/css/setup.css";
import "../assets/css/sm-clean.css";
import "../assets/css/common.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

// routes
import routes from "./routes";

// UI Components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Home from "../pages";
import axios from "axios";
import {useEffect, useState} from "react";

// -------------

/**
 * Making base name for the website (needed in deployment)
 */

interface UserData {
  about: {
    name?: string;
    address: string;
    phoneNumber: string;
  };
  email: string;
  _id: string;
}

const router = createBrowserRouter(routes, {
  basename: "/volos-react",
});

function App() {
  const [mydata, setData] = useState<UserData | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
      )
      .then((res) => {
        console.log(res.data.user.about.name);
        setData(res.data.user);
      });
  }, []);
  return (
    <div className="App">
      <Navbar
        key={mydata?._id}
        name={mydata?.about?.name ?? ""} // Use fallback value if name is undefined
        address={mydata?.about.address ?? ""}
        email={mydata?.email ?? ""} // Use fallback value if email is undefined
        number={mydata?.about.phoneNumber ?? ""}
      />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
      <Home />
    </div>
  );
}

export default App;

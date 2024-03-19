import {useEffect, useState} from "react";

// Sections
import HomeSection from "./sections/Home";
import Service from "./sections/Service";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Portfolio from "./sections/portfolio";
import Skills from "./sections/Skills";

// Components
import Loader from "../components/Loader";
import axios from "axios";

// -------------------

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOffLoader, setFadeOffLoader] = useState<boolean>(false);

  interface UserData {
    about: {
      name: string;
      title: string;
      subTitle: string;
      description: string;
      address: string;
      phoneNumber: string; // Assuming phoneNumber is of type string
    };
    social_handles: any[];
    services: any[]; // Assuming services is an array of strings
    timeline: any[]; // Adjust the type as per your data structure
    skills: any[]; // Adjust the type as per your data structure
    email: string;
    _id: string;
  }

  //api key link
  const [mydata, setData] = useState<UserData | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
      )
      .then((res) => {
        setData(res.data.user);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const loaderTimer = setTimeout(handleLoad, 750);
    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleLoad = () => {
    setFadeOffLoader(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {loading ? <Loader fadeOffLoader={fadeOffLoader} /> : <></>}

      <div>
        <div className="content-right">
          <div className="content-right-wrapper">
            {mydata && (
              <>
                <HomeSection
                  Name={mydata?.about.name}
                  text={mydata?.about.title}
                  subText={mydata?.about.subTitle}
                  socialMedia={mydata?.social_handles}
                  key={mydata._id}
                />
                <Service service={mydata?.services} />
                <Portfolio />
                <Resume resumeDetails={mydata?.timeline} />
                <Skills skills={mydata?.skills} />
                <Contact
                  desc={mydata?.about.description}
                  ID={mydata._id}
                  Email={mydata.email}
                  Address={mydata.about.address}
                  phone={mydata.about.phoneNumber}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

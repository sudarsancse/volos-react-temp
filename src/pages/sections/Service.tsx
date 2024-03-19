// Images
import servImg1 from "../../assets/images/services/service1.png";
import servImg2 from "../../assets/images/services/service2.png";
import servImg3 from "../../assets/images/services/service3.png";
import servImg4 from "../../assets/images/services/service4.png";
import servImg5 from "../../assets/images/services/service4.png";

// Data
import serviceData from "../../data/service.json";

// -----------------------
interface ServiceItem {
  _id: string;
  name: string;
  className?: string;
  image: {
    url: string;
  };
  imageAltText: string;
  charge: string;
  desc: string;
}

interface Props {
  service: ServiceItem[];
}
function Service(props: Props) {
  const images: string[] = [servImg1, servImg2, servImg3, servImg4, servImg5];

  return (
    <section id="service" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row">
            <div className="one-half width-55">
              <div className="services-wrapper">
                {Array.isArray(props.service) &&
                  props.service.map((serv) => (
                    <div key={serv._id} className={serv.className!}>
                      <h4 className="service-title">{serv.name}</h4>
                      <img
                        id="service-image"
                        src={serv.image.url}
                        alt={serv.imageAltText}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="one-half width-40 last">
              <h2 className="entry-title section-title">{serviceData.title}</h2>
              {Array.isArray(props.service) &&
                props.service.map((serv) => (
                  <div key={serv._id} className="service-container">
                    <p className="section-info">{serv.charge}</p>
                    <p className="section-info">{serv.desc}</p>
                  </div>
                ))}

              <div className="button-group-wrapper">
                <a className="button">Download CV</a>
                <a href="#portfolio" className="button">
                  Check My Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;

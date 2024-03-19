import homeData from "../../data/home.json";

interface Link {
  url: string;
  platform: string;
}

interface HomeProps {
  Name: string;
  text: string;
  subText: string;
  socialMedia: Link[];
}

function Home(props: HomeProps) {
  return (
    <section id="home" className="section full-width-section">
      <div className="section-wrapper block">
        <div className="home-left-part">
          <p className="site-des">{homeData.welcomeText}</p>
          <h1 className="entry-title">{props.Name}</h1>
          <p className="site-info">{props.text}</p>
          <p className="site-info">{props.subText}</p>

          <div className="social-links">
            {Array.isArray(props.socialMedia) &&
              props.socialMedia.slice(0, 3).map((link: Link, i: number) => (
                <a key={"link-" + i} href={link.url}>
                  {link.platform}
                </a>
              ))}
          </div>
        </div>
        <div className="home-right-part"></div>
      </div>
    </section>
  );
}

export default Home;

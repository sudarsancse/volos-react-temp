// Images
import signature from "../../assets/images/signature2.png";

// Data
import resumeData from "../../data/resume.json";
import {markdownToHTML} from "../../utils/converter";

interface ResumeDetails {
  _id: string;
  company_name: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  summary: string;
  bulletPoints: string[];
}

interface ResumeProps {
  resumeDetails: ResumeDetails[];
}

function Resume(props: ResumeProps) {
  return (
    <section id="resume" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row">
            <div className="one-half width-55">
              <h2 className="entry-title section-title">
                {resumeData.experience.title}
              </h2>

              <ul className="timeline-holder">
                {Array.isArray(props.resumeDetails) &&
                  props.resumeDetails.map((exp: ResumeDetails, i: number) => (
                    <li key={exp._id} className="timeline-event">
                      <span
                        key={"exps--" + i}
                        className="timeline-circle"
                      ></span>
                      <div
                        key={"exp_-_" + i}
                        className="timeline-event-content"
                      >
                        <div
                          key={"exps" + i}
                          dangerouslySetInnerHTML={{
                            __html: markdownToHTML(exp.company_name),
                          }}
                        ></div>
                        <span key={"exp--" + i} style={{fontWeight: "bold"}}>
                          {exp.startDate.slice(0, 4)} -{" "}
                        </span>
                        <span key={"exp -" + i} style={{fontWeight: "bold"}}>
                          {exp.endDate.slice(0, 4)}{" "}
                        </span>
                        <span key={"exp_-" + i}>{exp.jobTitle} </span>
                        <span key={"exp__" + i}>{exp.summary} </span>
                      </div>
                      <div key={"exp --" + i} className="timeline-event-date">
                        {exp.startDate.slice(0, 4)}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="one-half width-40 last">
              <h2 className="entry-title section-title">
                {resumeData.coverLetter.title}
              </h2>
              {Array.isArray(props.resumeDetails) &&
                props.resumeDetails.map((points: ResumeDetails) => (
                  <p key={points._id}>{points.bulletPoints.slice(0, 2)}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

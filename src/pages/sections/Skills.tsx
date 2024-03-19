import React, {useRef, useEffect, useState} from "react";

// Plugins
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Data
import skillsData from "../../data/skills.json";

interface Skill {
  _id: string;
  name: string;
  percentage: number;
}

interface Props {
  skills: Skill[];
}

function Skills(props: Props) {
  const circleProgressBarRef = useRef<HTMLDivElement>(null);
  const [circleProgress, setCircleProgress] = useState<number[]>([]);

  const normalProgressBarRef = useRef<HTMLDivElement>(null);
  const [normalProgress, setNormalProgress] = useState<number[]>([]);

  useEffect(() => {
    if (props.skills) {
      const progressBarYPosition =
        circleProgressBarRef.current!.getBoundingClientRect().top +
        window.scrollY;
      const handleScroll = () => {
        if (window.scrollY >= progressBarYPosition) {
          setCircleProgress(
            props.skills.map((progress: Skill) => progress.percentage)
          );
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [props.skills]);

  useEffect(() => {
    if (props.skills) {
      const progressBarYPosition =
        normalProgressBarRef.current!.getBoundingClientRect().top +
        window.scrollY;
      const handleScroll = () => {
        if (window.scrollY >= progressBarYPosition) {
          setNormalProgress(
            props.skills.map((progress: Skill) => progress.percentage)
          );
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [props.skills]);

  return (
    <section id="skills" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row m-bottom-60">
            <h2 className="entry-title section-title">{skillsData.title}</h2>

            <div className="skill-circle-holder">
              {Array.isArray(props.skills) &&
                props.skills.slice(0, 12).map((prog: Skill, i: number) => (
                  <div key={prog._id} className="skill-circle">
                    <div ref={circleProgressBarRef}>
                      <CircularProgressbar
                        value={circleProgress[i]}
                        text={`${prog.percentage}%`}
                        counterClockwise
                        strokeWidth={15}
                        styles={buildStyles({
                          textColor: "#F37B83",
                          textSize: 18,
                          pathColor: "#F37B83",
                          trailColor: "#554247",
                          strokeLinecap: "butt",
                          pathTransitionDuration: 2,
                        })}
                      />
                    </div>
                    <p className="skill-circle-text">{prog.name}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="row" ref={normalProgressBarRef}>
            <div className="one-half">
              <div className="skills-holder">
                {Array.isArray(props.skills) &&
                  props.skills.slice(12, 15).map((skill: Skill, i: number) => (
                    <div key={skill._id} className="skill-holder">
                      <div className="skill-text">
                        <div className="skill">
                          <div
                            className="skill-fill"
                            style={{width: `${normalProgress[i]}%`}}
                          ></div>
                        </div>
                        <span>{skill.name}</span>
                      </div>
                      <div className="skill-percent">{skill.percentage}%</div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="one-half last">
              <div className="skills-holder sec-skills-holder">
                {Array.isArray(props.skills) &&
                  props.skills.slice(15, 18).map((skill: Skill, i: number) => (
                    <div key={skill._id} className="skill-holder">
                      <div className="skill-text">
                        <div className="skill">
                          <div
                            className="skill-fill"
                            style={{
                              width: `${
                                normalProgress[
                                  i +
                                    Math.ceil(
                                      skillsData.horizontalProgress.length / 2
                                    )
                                ]
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span>{skill.name}</span>
                      </div>
                      <div className="skill-percent">{skill.percentage}%</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import React from "react";
import Gauge from "./Gauge";

const Gauges = ({ data }) => {
  return (
    <div className="gauges">
      {data.map((category) => {
        return <div className={category.id} key={category.id}>
          <h3>{category.title}</h3>
          {category.skills[0].details &&
            <>
              {
                category.skills.map((degree) => {
                  return <p key={degree.title}> 
                    <a href={degree.titleLink} target="_blank" className="txt-primary" rel="noreferrer">{degree.title}</a>
                    <br />
                    {degree.detailsLink ? <a href={degree.detailsLink} target="_blank" className="txt-secondary" rel="noreferrer"><span className="company">{degree.details}</span></a> : <span className="company">{degree.details}</span>}
                  </p>
                })
              }
            </>
          }
          {category.skills[0].level &&
            <ul>
              {category.skills.map((gauge, index) => {
                return <Gauge key={index} gauge={gauge} />
              })}
            </ul>
          }
          {!category.skills[0].level && !category.skills[0].details &&
            <p>
              {category.skills
                .map((skill) => {
                  return skill.title;
                })
                .join(", ")}
            </p>
          }
        </div>
      })}
    </div>
  );
};

export default Gauges;

import React from "react";
import { schedule } from "../data/schedule";

const CourseSchedule = () => {
  return (
    <div
      className="centered-table"
      style={{
        display: "flex",
        "justify-content": "center",
        alignItems: "center",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Lecture</th>
            <th>Title</th>
            <th>Resources</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={item.id}>
              <td>{index}</td>
              <td>{item.title}</td>
              <td>
                {item.slidesLink && (
                  <a href={item.slidesLink} target="_blank" rel="noreferrer">
                    Slides
                  </a>
                )}
                &nbsp;
                {item.lectureCodeLink && (
                  <a
                    href={item.lectureCodeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lecture Code
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseSchedule;

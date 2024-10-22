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
        padding: "1rem",
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
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                {item.slidesLink && (
                  <a href={item.slidesLink} target="_blank" rel="noreferrer">
                    Slides
                  </a>
                )}

                {item.lectureCodeLink && (
                  <>
                    &nbsp; : &nbsp;
                    <a
                      href={item.lectureCodeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lecture Code
                    </a>
                  </>
                )}
                {item.recordingLink && (
                  <>
                    &nbsp; : &nbsp;
                    <a
                      href={item.recordingLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lecture Recording
                    </a>
                  </>
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

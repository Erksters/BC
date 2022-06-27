import React from "react";

const Results = (props) => {
  const { Complaints } = props;
  console.log(
    "Results Complaints",
    Complaints.map((entry) => entry.ID)
  );

  return (
    <>
      <table>
        <tr>
          <th>ID #</th>

          <th>Notes</th>
          <th>Date</th>
        </tr>

        <tbody>
          {Complaints.map((entry, index) => (
            <tr key={index}>
              <td>{entry.ID}</td>
              <td>{entry.Notes}</td>
              <td>
                {new Date().toLocaleString("en", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Results;

import React from "react";

type Props = {};

const test = (props: Props) => {
  return (
    <div>
      <h2>Duplicate Courses</h2>
      {dupicate &&
        dupicate.map((duplicateSet, index) => (
          <div key={Object.keys(duplicateSet)[index]}>
            {Object.keys(duplicateSet).map((convertCode) => (
              <div key={convertCode}>
                <h3>{`Convert Code: ${convertCode}`}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Course Code</th>
                      <th>Credit</th>
                      <th>Convert Name</th>
                      <th>Convert Credit</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {duplicateSet[convertCode].map((item) => (
                      <tr key={item._id}>
                        <td>{item.course_name}</td>
                        <td>{item.course_code}</td>
                        <td>{item.course_credit}</td>
                        <td>{item.convert_name}</td>
                        <td>{item.convert_credit}</td>
                        <td>{item.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

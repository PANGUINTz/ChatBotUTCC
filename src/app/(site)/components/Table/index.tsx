import React from "react";
const index = ({ changeState, initialData, title }: any) => {
  initialData?.general?.map((v: any, k: number) => console.log(v));

  return (
    <div className="container mx-auto my-20">
      {changeState && (
        <div>
          <h3 className="text-black mb-3 mt-5">{title}</h3>
          <table className="text-white w-full text-left">
            <tbody>
              <tr>
                <th className="p-5 bg-green-700">รหัสวิชา-ชื่อวิชา</th>
                <th className="p-5  bg-green-700 text-center">หน่วยกิต</th>
                {title !== "รายวิชาที่ไม่สามารถเทียบโอนได้" ? (
                  <>
                    <th className="p-5 bg-gray-800">
                      รหัสวิชา-ชื่อวิชา (วิชาที่เทียบหน่วยกิตได้)
                    </th>
                    <th className="p-5 bg-gray-800 text-center">หน่วยกิต</th>
                  </>
                ) : (
                  <>
                    <th className="p-5 bg-gray-800 text-center">หมายเหตุ</th>
                  </>
                )}
              </tr>
              {initialData?.map((data: any, k: number) => (
                <tr
                  className="border-b border-gray-500 bg-white text-black"
                  key={k}
                >
                  <td className="p-5">
                    <p>
                      {data?.course_code} {data?.course_name}
                    </p>
                  </td>
                  <td className="p-5 text-center border-r-4">
                    <p>{data?.course_credit}</p>
                  </td>
                  {title === "รายวิชาที่ไม่สามารถเทียบโอนได้" ? (
                    <td className="p-5">
                      {data?.desc
                        ? data?.desc
                        : "รายวิชานี้หน่วยกิตไม่เพียงพอต่อการเทียบโอน"}
                    </td>
                  ) : (
                    <>
                      <td className="p-5">
                        {data?.convert_code} {data?.convert_name}
                      </td>
                      <td className="p-5 text-center border-r-4">
                        <p>{data?.course_credit}</p>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default index;

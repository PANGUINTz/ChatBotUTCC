import React from "react";
import Image from "next/image";
import Search from "@/assets/images/search.png";
const index = ({ changeState, initialData, title, dupicate }: any) => {
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

              {dupicate ? (
                dupicate.map((dupicateValue: any, index: number) => (
                  <tr
                    key={Object.keys(dupicateValue)[index]}
                    className="border-b border-gray-500 bg-white text-black"
                  >
                    {Object.keys(dupicateValue).map((convertCode) => (
                      <>
                        <td key={convertCode} className="p-5">
                          {dupicateValue[convertCode].map((item: any) => (
                            <p>
                              {item.course_code} {item.course_name}
                            </p>
                          ))}
                        </td>
                        <td
                          key={convertCode}
                          className="p-5 text-center border-r-4"
                        >
                          {dupicateValue[convertCode].map((item: any) => (
                            <p>{item.course_credit}</p>
                          ))}
                        </td>
                        <td className="p-5">
                          <p>
                            {dupicateValue[convertCode][0].course_code}&nbsp;
                            {dupicateValue[convertCode][0].course_name}
                          </p>
                        </td>
                        <td className="p-5 text-center border-r-4">
                          {dupicateValue[convertCode][0].course_credit}
                        </td>
                      </>
                    ))}
                  </tr>
                ))
              ) : (
                <tr className="">
                  <td className="text-black" colSpan={4}>
                    <div className="flex flex-col items-center p-2.5">
                      <Image src={Search} alt={"search"} width={70} />
                      ไม่มีข้อมูล
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default index;

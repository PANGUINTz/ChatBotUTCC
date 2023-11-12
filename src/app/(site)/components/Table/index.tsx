import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import Image from "next/image";
import Search from "../../../../assets/images/search.png";
const index = ({ changeState }: any) => {
  const columns = [
    {
      key: "Course_N",
      label: "รหัสวิชา-ชื่อวิชา",
    },
    {
      key: "countCourseN",
      label: "หน่วยกิต",
    },
    {
      key: "NCourse_N",
      label: "รหัสวิชา-ชื่อวิชา (วิชาที่เทียบหน่วยกิตได้)",
    },
    {
      key: "countNCourseN",
      label: "หน่วยกิต",
    },
  ];

  const datas = [
    {
      Accept: [
        {
          Course_C: "30000-1201",
          Course_N: "ภาษาอังกฤษเพื่อการสื่อสาร",
          NCourse_C: "GE071",
          NCourse_N: "ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน",
        },
        {
          Course_C: "30204-2004",
          Course_N: "หลักการคิดเชิงออกแบบและนวัตกรรมธุรกิจดิจิทัล",
          NCourse_C: "GE154",
          NCourse_N: "การคิดเชิงนวัตกรรมทางดิจิทัลเพื่อธุรกิจ",
        },
        {
          Course_C: "30000-1201",
          Course_N: "ภาษาอังกฤษเพื่อการสื่อสาร",
          NCourse_C: "GE071",
          NCourse_N: "ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน",
        },
        {
          Course_C: "30204-2004",
          Course_N: "หลักการคิดเชิงออกแบบและนวัตกรรมธุรกิจดิจิทัล",
          NCourse_C: "GE154",
          NCourse_N: "การคิดเชิงนวัตกรรมทางดิจิทัลเพื่อธุรกิจ",
        },
        {
          Course_C: "30000-1201",
          Course_N: "ภาษาอังกฤษเพื่อการสื่อสาร",
          NCourse_C: "GE071",
          NCourse_N: "ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน",
        },
        {
          Course_C: "30204-2004",
          Course_N: "หลักการคิดเชิงออกแบบและนวัตกรรมธุรกิจดิจิทัล",
          NCourse_C: "GE154",
          NCourse_N: "การคิดเชิงนวัตกรรมทางดิจิทัลเพื่อธุรกิจ",
        },
        {
          Course_C: "30000-1201",
          Course_N: "ภาษาอังกฤษเพื่อการสื่อสาร",
          NCourse_C: "GE071",
          NCourse_N: "ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน",
        },
        {
          Course_C: "30204-2004",
          Course_N: "หลักการคิดเชิงออกแบบและนวัตกรรมธุรกิจดิจิทัล",
          NCourse_C: "GE154",
          NCourse_N: "การคิดเชิงนวัตกรรมทางดิจิทัลเพื่อธุรกิจ",
        },
        {
          Course_C: "30000-1201",
          Course_N: "ภาษาอังกฤษเพื่อการสื่อสาร",
          NCourse_C: "GE071",
          NCourse_N: "ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน",
        },
        {
          Course_C: "30204-2004",
          Course_N: "หลักการคิดเชิงออกแบบและนวัตกรรมธุรกิจดิจิทัล",
          NCourse_C: "GE154",
          NCourse_N: "การคิดเชิงนวัตกรรมทางดิจิทัลเพื่อธุรกิจ",
        },
        {
          Course_C: "30000-1201",
          Course_N: "ภาษาอังกฤษเพื่อการสื่อสาร",
          NCourse_C: "GE071",
          NCourse_N: "ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน",
        },
        {
          Course_C: "30204-2004",
          Course_N: "หลักการคิดเชิงออกแบบและนวัตกรรมธุรกิจดิจิทัล",
          NCourse_C: "GE154",
          NCourse_N: "การคิดเชิงนวัตกรรมทางดิจิทัลเพื่อธุรกิจ",
        },
      ],
      Repeat: [
        {
          Course_C: "30204-2006",
          Course_N: "การสร้างแบรนด์",
          RCourse_C: "30204-2001",
          RCourse_N: "พื้นฐานธุรกิจ",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto my-20">
      {changeState && (

        <table className="text-white w-full text-left">
                  <h3 className="text-black mb-3 mt-5">หมวดวิชาศึกษาทั่วไป</h3>
          <tbody>
            <tr>
              <th className="p-5 bg-green-700">รหัสวิชา-ชื่อวิชา</th>
              <th className="p-5  bg-green-700 text-center">หน่วยกิต</th>
              <th className="p-5 bg-gray-800">
                รหัสวิชา-ชื่อวิชา (วิชาที่เทียบหน่วยกิตได้)
              </th>
              <th className="p-5 bg-gray-800 text-center">หน่วยกิต</th>
            </tr>
            {datas[0].Accept.map((data, k) => (
              <tr
                className="border-b border-gray-500 bg-white text-black"
                key={k}
              >
                <td className="p-5">
                  <p>
                    {data?.Course_C} {data?.Course_N}
                  </p>
                  <p>
                    {data?.Course_C} {data?.Course_N}
                  </p>
                </td>
                <td className="p-5 text-center border-r-4">
                  <p>3</p>
                  <p>3</p>
                </td>
                <td className="p-5">
                  {data?.NCourse_C} {data?.NCourse_N}
                </td>
                <td className="p-5 text-center">3</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* {changeState && (
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} className="bg-green-700 p-5">
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            emptyContent={
              <div className="flex items-center flex-col p-5">
                <Image src={Search} alt="search" />
                <p className=" text-[#5F5F5F] text-xl">
                  กรุณากรอกข้อมูลรหัสวิชา
                </p>
              </div>
            }
          >
            {datas[0]?.Accept.map((v, k) => {
              return (
                <TableRow key={k}>
                  <TableCell className="p-5">
                    {v.Course_C} {v.Course_N}
                  </TableCell>
                  <TableCell className="p-5 text-center">3</TableCell>
                  <TableCell className="p-5">
                    {v.NCourse_C} {v.NCourse_N}
                  </TableCell>
                  <TableCell className="p-5 text-center">3</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )} */}
    </div>
  );
};

export default index;

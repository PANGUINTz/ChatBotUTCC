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
          Course_C: "30204-2001",
          Course_N: "พื้นฐานธุรกิจ",
          NCourse_C: "GE_104",
          NCourse_N: "ธุรกิจออนไลน์",
        },
        {
          Course_C: "30204-2002",
          Course_N: "พื้นฐานธุรกิจ",
          NCourse_C: "GE_105",
          NCourse_N: "อะไรวะ",
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
                  <TableCell className="p-5">3</TableCell>
                  <TableCell className="p-5">
                    {v.NCourse_C} {v.NCourse_N}
                  </TableCell>
                  <TableCell className="p-5">3</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default index;

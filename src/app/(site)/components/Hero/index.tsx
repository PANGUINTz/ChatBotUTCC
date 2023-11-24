"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import HeroImage from "../../../../assets/images/hero_image.png";
import { compareSubject } from "../../../service/subjectCompare";

const index = ({ changeState, saveData, initialData }: any) => {
  const [formData, setFormData] = useState("");
  const handleSubmit = async () => {
    const splitData = formData.split(/[,\s]+/);

    if (splitData[0] === "") {
      Swal.fire({
        title: "กรุณากรอกรหัสวิชาเพื่อตรวจสอบ",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      const course_N: any = {};
      for (let i = 0; i < splitData.length; i++) {
        course_N[`course_N${i + 1}`] = splitData[i];
      }
      const data = await compareSubject(course_N);

      const getCourse = Object.keys(data.dupicate[0]); //get object course
      console.log(data);
      console.log(data.dupicate[0][getCourse[0]]);
      //console.log(data.dupicate[0][getCourse[0]][0].course_code)

      if (initialData.length === 0) {
        let validate = 0;
        if (data.notCompare.length > 0) {
          for (let i = 0; i < data.notCompare.length; i++) {
            for (let j = 0; j < data.notCompare.length; j++) {
              if (
                data.notCompare[i].course_code ==
                  data.notCompare[j].course_code &&
                i != j
              ) {
                validate = 1;
                break;
              }
            }
          }
        }
        if (
          Array.isArray(data.dupicate[0][getCourse[0]]) &&
          data.dupicate[0][getCourse[0]] != null
        ) {
          for (let i = 0; i < data.dupicate[0][getCourse[0]].length; i++) {
            for (let j = 0; j < data.dupicate[0][getCourse[0]].length; j++) {
              if (
                data.dupicate[0][getCourse[0]][i].course_code ==
                  data.dupicate[0][getCourse[0]][j].course_code &&
                i != j
              ) {
                validate = 1;
                break;
              }
            }
          }
        }
        if (validate != 1) {
          saveData(data);
        } else {
          console.log("eror");
        }
      } else {
        let validate = 0;
        if (data.general[0] != null) {
          for (let i = 0; i < initialData.general.length; i++) {
            if (
              initialData.general[i].course_code == data.general[0].course_code
            ) {
              validate = 1;
              break;
            }
          }
        } else if (data.notCompare[0] != null) {
          for (let i = 0; i < initialData.notCompare.length; i++) {
            if (
              initialData.notCompare[i].course_code ==
              data.notCompare[0].course_code
            ) {
              validate = 1;
              break;
            }
          }
        }
        for (let i = 0; i < data.notCompare.length; i++) {
          for (let j = 0; j < data.notCompare.length; j++) {
            if (
              data.notCompare[i].course_code ==
                data.notCompare[j].course_code &&
              i != j
            ) {
              validate = 1;
              break;
            }
          }
        }
        if (validate != 1) {
          const mergedData = {
            general: initialData.general.concat(data.general),
            duplicate: initialData.dupicate?.concat(data.dupicate),
            notCompare: initialData.notCompare?.concat(data.notCompare),
          };
          saveData(mergedData);
        } else {
          console.log("eror");
        }
      }
    }
  };

  return (
    <div className="relative">
      <Image
        src={HeroImage}
        alt="hero"
        className="w-screen max-md:object-fill"
        style={{ height: "480px" }}
      />
      {changeState ? (
        <div>
          <p className="absolute text-white font-extralight tracking-widest spacing border-b border-white top-1/2 translate-x-1/2 translate-y-1/2 right-1/2 text-4xl duration-200 max-md:text-2xl max-[500px]:text-xl ">
            เทียบโอนหลักสูตร
          </p>
          <div className="bg-white absolute z-10 px-6 py-4 xl:w-1/3 shadow-md bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 shadow-gray-600 max-xl:w-11/12 duration-200 max-[500px]:my-5 max-md:text-sm ">
            <div>
              <p className="font-light ">
                กรุณากรอกรหัสวิชาสำหรับตรวจสอบการเทียบโอน
              </p>
            </div>

            <div className="flex">
              <input
                type="text"
                className="w-full my-2 mr-3 p-2 rounded border border-gray-400 "
                placeholder="ตัวอย่างการกรอกรหัสวิชา 30000-1200, 30000-1201"
                onChange={(e) => setFormData(e.target.value)}
              />
              <button
                className="bg-green-700 py-2 px-5 text-white hover:bg-green-900 duration-300 rounded-lg h-fit mt-2"
                onClick={handleSubmit}
              >
                ยืนยัน
              </button>
            </div>
            <p className="text-red-500">*กรุณากรอกรหัสวิชาให้ถูกต้อง</p>
          </div>
        </div>
      ) : (
        <p className="absolute text-white font-extralight tracking-widest spacing border-b border-white top-1/2 translate-x-1/2 translate-y-1/2 right-1/2 text-4xl duration-200 max-md:text-2xl max-[500px]:text-xl ">
          เงื่อนไขการเทียบโอน
        </p>
      )}
    </div>
  );
};

export default index;

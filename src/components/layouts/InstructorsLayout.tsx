import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { NextPage } from "next";
import Image from "next/image";
// import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { User } from "src/knowledgeTypes";

import LoadingImg from "../../../public/animated-icon-1cademy.gif";
import { useAuth } from "../../context/AuthContext";
import { Instructor } from "../../instructorsTypes";
// import ROUTES from "../../lib/utils/routes";
import HeaderNavbar from "../instructors/HeaderNavbar";
import HeaderNavbarMovil from "../instructors/HeaderNavbarMovil";
import { SemesterFilter } from "../instructors/SemesterFilter";
// import { useSemesterFilter } from "../instructors/useSemesterFilter";

export type Option = {
  id: string;
  label: string;
  title: string;
  route: string;
};

const OPTIONS: Option[] = [
  { id: "02", label: "DASHBOARD", title: "DASHBOARD", route: "/instructors/dashboard" },
  { id: "03", label: "STUDENTS", title: "STUDENTS", route: "/instructors/students" },
  { id: "05", label: "SETTINGS", title: "SETTINGS", route: "/instructors/settings" },
];

type InstructorsLayoutPageProps = {
  selectedSemester: string | undefined;
  selectedCourse: string | undefined;
  user: User;
};

type Props = {
  children: (props: InstructorsLayoutPageProps) => ReactNode;
};
export type InstructorLayoutPage<P = InstructorsLayoutPageProps, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: InstructorLayoutPage) => ReactNode;
};
export const InstructorsLayout: FC<Props> = ({ children }) => {
  const [{ user }] = useAuth();
  const theme = useTheme();
  const isMovil = useMediaQuery(theme.breakpoints.down("md"));

  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [semesters, setSemesters] = useState<string[]>([]);
  const [allCourses, setAllCourses] = useState<CoursesResult>({});
  const [selectedSemester, setSelectedSemester] = useState<string | undefined>(undefined);
  const [courses, setCourses] = useState<any[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  // TODO: create useEffect to load semesters

  const db = getFirestore();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.replace(ROUTES.signIn);
  //   }
  // }, [isAuthenticated, router]);

  useEffect(() => {
    if (!user) return console.warn("Not user found, wait please");
    window.document.body.classList.remove("Image");
    const getInstructor = async () => {
      const instructorsRef = collection(db, "instructors");
      const q = query(instructorsRef, where("uname", "==", user.uname));
      const userNodeDoc = await getDocs(q);
      if (!userNodeDoc.docs.length) return;

      const intructor = userNodeDoc.docs[0].data() as Instructor;
      setInstructor(intructor);
      const courses = getCoursesByInstructor(intructor);
      const semester = Object.keys(courses);
      setSemesters(semester);
      setAllCourses(courses);
    };

    getInstructor();
  }, [db, user]);

  useEffect(() => {
    if (!selectedSemester) return setCourses([]);

    const newCourses = getCourseBySemester(selectedSemester, allCourses);
    setCourses(newCourses);
    setSelectedCourse(newCourses[0]);
  }, [allCourses, selectedSemester]);

  // const { semesters, selectedSemester, setSelectedSemester, courses, selectedCourse, setSelectedCourse } =
  //   useSemesterFilter();

  if (!user || !instructor)
    return (
      <div className="CenterredLoadingImageContainer">
        <Image
          className="CenterredLoadingImage"
          loading="lazy"
          src={LoadingImg}
          alt="Loading"
          width={250}
          height={250}
        />
      </div>
    );
  // if (!instructor) return <h1>Not instructor found, lets wait a moment</h1>;
  return (
    <Box
      sx={{
        background: theme => (theme.palette.mode === "light" ? "#F5F5F5" : "#28282A"),
        border: "solid 2px royalBlue",
      }}
    >
      {!isMovil && <HeaderNavbar options={OPTIONS} />}
      {isMovil && <HeaderNavbarMovil options={OPTIONS} />}
      {/* <HeaderNavbar /> */}
      <Box sx={{ maxWidth: "1384px", py: "10px", m: "auto", px: { xs: "10px", xl: "0px" } }}>
        <SemesterFilter
          semesters={semesters}
          selectedSemester={selectedSemester}
          setSelectedSemester={setSelectedSemester}
          courses={courses}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          isMovil={isMovil}
        />
      </Box>

      {children({ selectedSemester, selectedCourse, user })}
    </Box>
  );
};

const getCourseBySemester = (semester: string | undefined, courses: { [key: string]: string[] }): string[] => {
  if (!semester) return [];
  return courses[semester] ?? [];
};

// const getFirstCourse = (semester: string | undefined, courses: { [key: string]: string[] }): string | undefined => {
//   const coursesBySemester = getCourseBySemester(semester, courses);
//   return coursesBySemester[0] ?? undefined;
// };

type CoursesResult = {
  [key: string]: string[];
};
const getCoursesByInstructor = (instructor: Instructor): CoursesResult => {
  return instructor.courses.reduce((acu: CoursesResult, cur) => {
    const tmpValues = acu[cur.title] ?? [];
    return { ...acu, [cur.title]: [...tmpValues, `${cur.cTitle} ${cur.pTitle}`] };
  }, {});
};

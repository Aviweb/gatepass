"use client";
import React from "react";
import { StudentStatusTable } from "../components/StudentStatusTable";
import { pages } from "next/dist/build/templates/app-page";

export const page = () => {
  return <StudentStatusTable />;
};

export default page;

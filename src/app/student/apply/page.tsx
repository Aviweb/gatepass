"use client";
import React from "react";
import { ApplyForm } from "../../components/ApplyForm";
import { Footer } from "@/app/components/Footer";
import HeaderNew from "@/app/components/HeaderNew";

const Page = () => {
  return (
    <>
      <HeaderNew role="student" />
      <ApplyForm />
      <Footer />
    </>
  );
};

export default Page;

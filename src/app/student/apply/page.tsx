"use client";
import React from "react";
import { ApplyForm } from "../../components/ApplyForm";
import HeaderShort from "@/app/components/HeaderShort";
import { Footer } from "@/app/components/Footer";

const Page = () => {
  return (
    <>
      <HeaderShort role="student" />
      <ApplyForm />
      <Footer />
    </>
  );
};

export default Page;

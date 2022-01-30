import React from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Movies() {
  return (
    <Layout>
      <div className="flex flex-col items-center my-24 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        <Card url="#" />
        <Card url="#" />
        <Card url="#" />
        <Card url="#" />
        <Card url="#" />
        <Card url="#" />
      </div>
    </Layout>
  );
}

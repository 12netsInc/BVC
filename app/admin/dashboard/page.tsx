"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const DashboardPage = () => {
  const {data} = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/admin/dashboard');
    }
  });

  return <>
    <div style={{height: "100vh", textAlign: "center"}}>
      <div style={{height: "50%"}}></div>
      <h1>Dashboard</h1>
    </div>
  </>
}

export default DashboardPage;
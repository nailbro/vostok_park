"use client";
import Header from "@/widgets/header/Header";
import FAQSection from "@/shared/components/faq/FAQ";
import UsefulVideos from "@/shared/components/videos/Vides";
import Cash from "@/shared/components/cash/Cash";

export default function Page() {
  return (
    <>
      <Header />
      <Cash />
      <UsefulVideos />
      <FAQSection />
    </>
  );
}

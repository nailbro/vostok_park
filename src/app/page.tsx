"use client";
import Header from "@/widgets/header/Header";
import FAQSection from "@/shared/components/faq/FAQ";
import UsefulVideos from "@/shared/components/videos/Vides";
import Cash from "@/shared/components/cash/Cash";
import Footer from "@/widgets/footer/Footer";
import Hero from "@/shared/components/hero/Hero";

export default function Page() {
  return (
    <>
      <Header />
      <Hero/>
      <Cash />
      <UsefulVideos />
      <FAQSection />
      <Footer/>
    </>
  );
}

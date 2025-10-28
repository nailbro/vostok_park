"use client";
import Header from "@/widgets/header/Header";
import FAQSection from "@/shared/components/faq/FAQ";
import UsefulVideos from "@/shared/components/videos/Vides";
import Cash from "@/shared/components/cash/Cash";
import Footer from "@/widgets/footer/Footer";
import Hero from "@/shared/components/hero/Hero";
import AdvantagesSection from "@/shared/components/advantages/Advantages";
import Steps from "@/shared/components/Steps/Steps";
import OnlineConnect from "@/shared/components/OnlineConnect/OnlineConnect";
import TariffSection from "@/shared/components/Tariff/Tariff";

export default function Page() {
  return (
    <>
      <Header />
      <Hero/>
      <AdvantagesSection/>
      <OnlineConnect/>
      <Steps/>
      <TariffSection/>
      <Cash />
      <UsefulVideos />
      <FAQSection />
      <Footer/>
    </>
  );
}

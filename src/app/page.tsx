"use client";
import Header from "@/widgets/header/Header";
import FAQSection from "@/shared/components/Faq/FAQ";
import UsefulVideos from "@/shared/components/Videos/Vides";
import Cash from "@/shared/components/Cash/Cash";
import Footer from "@/widgets/footer/Footer";
import Hero from "@/shared/components/Hero/Hero";
import AdvantagesSection from "@/shared/components/Advantages/Advantages";
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

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SelectedWorks from "@/components/home/SelectedWorks";
import AboutPreview from "@/components/home/AboutPreview";
import Capabilities from "@/components/home/Capabilities";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SelectedWorks />
      <AboutPreview />
      <Capabilities />
      <ClientsMarquee />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;

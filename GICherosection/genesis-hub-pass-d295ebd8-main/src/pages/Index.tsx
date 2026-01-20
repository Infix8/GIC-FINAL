import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CountdownTimer from "@/components/home/CountdownTimer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GIC 2026 - Global Innovators Conclave | Hyderabad</title>
        <meta name="description" content="Join the Global Innovators Conclave 2026 on 27-28 February in Hyderabad. A premier international innovation and entrepreneurship event." />
      </Helmet>
      <Layout>
        <HeroSection />
        <CountdownTimer />
      </Layout>
    </>
  );
};

export default Index;

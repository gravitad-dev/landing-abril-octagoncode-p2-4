import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import SocialButtons from "../Socials";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Layout>
        <section id="product">
          <Hero />
        </section>
        <Body />
      </Layout>
      <Footer />
      <SocialButtons />
    </div>
  );
}

export default LandingPage;

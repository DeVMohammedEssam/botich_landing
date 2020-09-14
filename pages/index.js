/** @format */

import CofounderCard from "components/CofounderCard";
import FeatureCard from "components/FeatureCard";
import Layout from "components/Layout";
/** @format */

import Head from "next/head";

const Home = () => (
  <Layout>
    <div className="home">
      <Head>
        <title>Botich</title>
      </Head>
      <header>
        <section className="services">
          <div className="avoid-navbar">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="text-container">
                    <h2 style={{ marginBottom: 20 }}>Our Services</h2>
                    <p>
                      Botish specialist in chatbots development with respect of
                      business requirements and how to allow all people to start
                      their own business depending on chatbots. on other side we
                      are looking forward to initiate an AI models into chatbot
                      to make it smarter
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-wrap justify-content-center justify-content-xl-start ">
                    <FeatureCard
                      color="#3B8F5D"
                      title="Facebook Chatbot"
                      icon={<img src="/images/messenger.svg" />}
                      desc="
                  botish platform allow everybody to create a Facebook chatbot without needing for a developer or a technical person.
                  you can get started with your chatbot after a few minutes"
                    />
                    <FeatureCard
                      color="#777"
                      title="Telegram Chatbot"
                      icon={<img src="/images/telegram.svg" />}
                      desc="botish platform allow everybody to
create a Telegram without
needing for a developer or
a technical person.
you can get started with your 
chatbot after a few minutes "
                    />
                    <FeatureCard
                      color="#777"
                      title="Deep Learning"
                      icon={<h3>NLP</h3>}
                      desc="training NLP models to allow 
chatbots to be smarter than
before.
this feature provides many benefits
for a business project"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="who-we-are mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="text-content">
                <h5 className="mb-3">WHO WE ARE</h5>
                <p>
                  People are at the heart of every connection we build. We
                  design products and deliver services that bring the world
                  closer together—one connection at a time.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="cofounders-container">
                <CofounderCard
                  imgSrc="/images/salah.jpg"
                  name="Mohammed Salah"
                  skills={[
                    "Software engineer",
                    "Web services , Machine learning and AI",
                  ]}
                />
                <CofounderCard
                  imgSrc="/images/khaled.jpg"
                  name="Khaled Hamoud"
                  skills={["Business developer", "Marketing and business"]}
                />
                <CofounderCard
                  imgSrc="/images/essam.jpg"
                  name="Mohammed Essam"
                  skills={[
                    "Software engineer",
                    "Web developer and mobile developer",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Home;

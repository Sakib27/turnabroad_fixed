"use client";
import React from "react";
import Accordion from "./Accordion";
import Motion from "@src/components/motion/Motion";

const FAQ = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20 px-6 xl:px-0 bg-white overflow-hidden">
      <div className="container">
        <div className="section-title mb-[30px] ">
          <Motion effect="fade-up" duration="2000">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black text-center">
              Frequently asked questions
            </h1>
          </Motion>
        </div>
        <div className="w-full pt-8">
          <Motion effect="fade-up" duration="2000">
            <Accordion
              title="How long does it typically take to process a nonimmigrant visa application for the United States?"
              answer="Visa processing times varies depending on the type of visa or the circumstances of the applicant. Generally, it takes between a few weeks to several months to get a decision."
            />
          </Motion>
          <Motion effect="fade-up" duration="2000">
            <Accordion
              title="Can I apply for a US visa if I have previously been denied one?"
              answer="As, individuals who have been denied a US visa in the past can reapply, but they must address the reasons for the previous denial and provide any additional documentation or information requested by the consular officer. It's essential to thoroughly review the reasons for the previous denial and ensure that the new application addresses any concerns raised by the consular officer."
            />
          </Motion>
          <Motion effect="fade-up" duration="2000">
            <Accordion
              title="What documentation do I need to provide as part of my US visa application?"
              answer="The documentations needed generally depends on the visa you are applying for. Usually, you need a valid passport, completed DS-160 form, a passport-sized photograph, proof of payment of the visa application fee, and any supporting documents relevant to your specific visa category such as letter of acceptance, employment letters, or financial statements."
            />
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

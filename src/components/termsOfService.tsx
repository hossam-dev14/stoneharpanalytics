'use client';

import { motion } from "framer-motion";
import Container from "./container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import { Icon } from "./ui/icons";


const TermsOfService = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainerVariants} className="min-h-screen px-8 mt-20">
      <Container className="min-h-screen text-white ">
        <div className="max-w-4xl mx-auto p-6 lg:p-12 mt-10"
        >
          <motion.h1 variants={fadeUpAnimationVariants} className="text-3xl font-bold text-center text-white  font-retrochips">Terms of Service</motion.h1>

          <motion.div variants={fadeUpAnimationVariants} className="mt-6 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
              <p className="text-neutral mt-2">
                By accessing or using our website, you agree to comply with these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. Use of Our Services</h2>
              <p className="text-neutral mt-2">
                You agree to use our services only for lawful purposes and in compliance with all applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. User Accounts</h2>
              <p className="text-neutral mt-2">
                If you create an account, you are responsible for maintaining the confidentiality of your account information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. Prohibited Activities</h2>
              <p className="text-neutral mt-2">
                You agree not to engage in any of the following activities:
              </p>
              <ul className="list-disc list-inside text-neutral mt-2 space-y-2">
                <li>Using our services for fraudulent purposes.</li>
                <li>Violating any local, state, or international laws.</li>
                <li>Attempting to gain unauthorized access to our systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">5. Intellectual Property</h2>
              <p className="text-neutral mt-2">
                All content on this website, including text, graphics, and logos, is owned by us and is protected under copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">6. Disclaimer of Warranties</h2>
              <p className="text-neutral mt-2">
                Our website is provided "as is" without any warranties, express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">7. Limitation of Liability</h2>
              <p className="text-neutral mt-2">
                We are not liable for any damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">8. Changes to These Terms</h2>
              <p className="text-neutral mt-2">
                We may update these Terms of Service from time to time. Changes will be posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">8. Contact Us</h2>
              <p className="text-neutral mt-2">
                If you have any questions, feel free to contact us:
              </p>
              <p className="mt-2 ">
                <span className="flex gap-4 py-1 text-white">
                  <Icon name="Mail" color="white" size={27} />
                  <strong className="text-neutral">Email:</strong> sh_inquiry@taybecllc.com
                </span>
                {/* <span className="flex gap-4 py-1 text-white">
                  <Icon name="Phone" color="white" size={27} />
                  <strong className="text-neutral">Phone:</strong> [your-phone-number]
                </span> */}
              </p>
            </section>
          </motion.div>
        </div>
      </Container>

    </motion.div>

  );
};

export default TermsOfService;

'use client';

import Container from "./container";
import { motion } from "framer-motion";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import { Icon } from "./ui/icons";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainerVariants}
      className="flex justify-between items-center max-lg:flex-col gap-6 px-8 mt-20">
      <Container className="min-h-screen text-white ">
        <div className="max-w-4xl mx-auto p-6 lg:p-12 mt-10">
          <motion.h1 variants={fadeUpAnimationVariants} className="text-3xl font-bold text-center text-white ">Privacy Policy</motion.h1>

          <motion.div variants={fadeUpAnimationVariants} className="mt-10 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
              <p className="text-neutral mt-2">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-neutral mt-2 space-y-2">
                <li><strong>Personal Information:</strong> Name, email, phone number, etc.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, etc.</li>
                <li><strong>Cookies & Tracking:</strong> We use cookies to enhance your experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
              <p className="text-neutral mt-2">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-neutral mt-2 space-y-2">
                <li>To provide and improve our services.</li>
                <li>To respond to inquiries or support requests.</li>
                <li>To analyze website traffic and optimize performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. Data Security</h2>
              <p className="text-neutral mt-2">
                We implement security measures to protect your data from unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. Sharing Your Information</h2>
              <p className="text-neutral mt-2">
                We do not sell or rent your personal data. We may share it in cases such as:
              </p>
              <ul className="list-disc list-inside text-neutral mt-2 space-y-2">
                <li>With service providers who help operate our website.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">5. Your Privacy Rights</h2>
              <p className="text-neutral mt-2">
                You have the right to request access, correction, or deletion of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">6. Third-Party Links</h2>
              <p className="text-neutral mt-2">
                Our website may contain links to third-party sites. We are not responsible for their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">7. Changes to This Policy</h2>
              <p className="text-neutral mt-2">
                We may update this policy. Any changes will be posted here.
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

export default PrivacyPolicy;

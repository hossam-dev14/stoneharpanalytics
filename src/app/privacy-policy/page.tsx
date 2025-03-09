import Head from "next/head";
import PrivacyPolicy from "@/components/privacyPolicy";

export default function page() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Stone Harp Analytics</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information." />
      </Head>

      <main className="items-center justify-center">
        <PrivacyPolicy />
      </main>
    </>
  );
};

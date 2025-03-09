import Head from "next/head";
import PrivacyPolicy from "@/components/privacyPolicy";
import TermsOfService from "@/components/termsOfService";

export default function page() {
  return (
    <>
      <Head>
        <title>Terms of Service | Stone Harp Analytics</title>
        <meta
          name="description"
          content="Read our Terms of Service to understand the rules and regulations for using our website."
        />
      </Head>
      <main className="items-center justify-center">
        <TermsOfService />
      </main>
    </>
  );
};

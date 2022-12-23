import Seo from "../components/seo";
import Header from "../components/header";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Charlotte Osborne - Privacy Policy"
        description="Privacy Policy for charlotteosborne.ca."
      />
      <Header
        title="Privacy Policy"
        subtitle=""
        description="Privacy policy for charlotteosborne.ca. Effective 2022/12/22."
        link="Home"
        url="/"
      />
      <div className="text-gray-800 dark:text-gray-200">
        <section className="mb-6">
          <h2 className="text-2xl text-black dark:text-white">Introduction</h2>
          <p>
            This is the privacy policy for{" "}
            <Link href="/" className="underline">
              https://charlotteosborne.ca/
            </Link>{" "}
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) to describe how
            and why information may be collected, used, and/or shared when you
            (user) use our services, such as:
          </p>
          <ul className="ml-8 list-disc">
            <li>
              Visit our website at{" "}
              <Link href="/" className="underline">
                https://charlotteosborne.ca/{" "}
              </Link>
            </li>
            <li>
              Submit a message on the contact form at{" "}
              <Link href="/contact" className="underline">
                https://charlotteosborne.ca/contact
              </Link>
            </li>
            <li>
              Engage with us in any other related ways including any sales,
              marketing, or events
            </li>
          </ul>
          <p className="font-bold my-3">
            For questions or concerns you may contact us at{" "}
            <Link href="/contact" className="underline">
              https://charlotteosborne.ca/contact
            </Link>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-black dark:text-white">
            What information do we collect
          </h2>

          <ol className="ml-8 list-decimal">
            <li className="pb-2">
              <h3 className="text-xl text-black dark:text-white">
                Personal information that you disclose to us
              </h3>
              <p>
                We collect personal information that you voluntarily provide to
                us when filling out the contact form. This information will be
                used for communication purposes. Consent to use this information
                for communication purposes is assumed when the form is
                submitted. We do not share any personal information unless
                consent is given or it is required by law. Data submitted
                through the contact form is sent using a third party,{" "}
                <Link
                  href="https://formsubmit.co/"
                  target="_blank"
                  className="underline"
                >
                  FormSubmit
                </Link>
                . You can read their full privacy policy here:{" "}
                <Link
                  href="https://formsubmit.co/privacy.pdf"
                  target="_blank"
                  className="underline"
                >
                  https://formsubmit.co/privacy.pdf{" "}
                </Link>
              </p>
            </li>
            <li>
              <h3 className="text-xl text-black dark:text-white">
                Information automatically collected
              </h3>
              <p>
                This website uses{" "}
                <Link
                  href="https://analytics.google.com/analytics/web/provision/#/provision"
                  className="underline"
                  target="_blank"
                >
                  Google Analytics
                </Link>{" "}
                to collect basic information about the user and their behaviour
                on the website. Google Analytics is a software tool created by
                Google to monitor and analyze web traffic. It collects data by
                putting the cookie on the user’s browser to collect basic
                information about the user such as location and their activity
                on the website. No{" "}
                <Link
                  href="https://support.google.com/analytics/answer/7686480"
                  className="underline"
                  target="_blank"
                >
                  personally identifying information
                </Link>{" "}
                is collected by Google Analytics. You provide consent to these
                analytic cookies by clicking “Accept” on the cookie popup bar.
                You may opt out by clicking the cookie in the bottom right
                corner to toggle the cookie popup bar and clicking decline. You
                can learn more about how Google uses cookies at{" "}
                <Link
                  href="https://policies.google.com/technologies/cookies?hl=en-GB"
                  className="underline"
                  target="_blank"
                >
                  https://policies.google.com/technologies/cookies?hl=en-GB
                </Link>
                .
              </p>
            </li>
          </ol>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl text-black dark:text-white">Cookies</h2>
          <p>
            Cookies are set by Google Analytics and used to collect basic
            information about the user and their behaviour on the website.
            Consent is given for analytic cookies when you click
            &quot;Accept&quot; on the cookies popup.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl text-black dark:text-white">
            Questions or concerns about this policy
          </h2>
          <p>
            For questions or concerns you may contact us at{" "}
            <Link href="/contact" className="underline">
              https://charlotteosborne.ca/contact
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}

import Seo from "../components/seo";
import Header from "../components/header";
import { useRouter } from "next/router";
export default function Success() {
  const router = useRouter();
  return (
    <>
      <Seo title="Charlotte Osborne - Message Sent!" description="" />
      <Header
        title={`Thank you, ${router.query.name}`}
        subtitle=" Your email has been sent."
        description={`I will get back to you at ${router.query.email} as soon as possible!`}
        link="Home"
        url="/"
      />
    </>
  );
}

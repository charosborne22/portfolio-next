import Seo from "../components/seo";
import Header from "../components/header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Contact() {
  const router = useRouter();
  const [error, setError] = useState();
  const formik = useFormik<{
    name: string;
    email: string;
    _subject: string;
    message: string;
  }>({
    initialValues: {
      name: "",
      email: "",
      _subject: "",
      message: "",
    },
    // Form validation
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Enter a vaild email address")
        .required("Email is required"),
      _subject: Yup.string().required("Subject is Required"),
      message: Yup.string().required("Message is Required"),
    }),
    // Submit form
    onSubmit: (values) => {
      fetch("https://formsubmit.co/ajax/7e4e51b45963afe1ae5b877026d810c0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          subject: values._subject,
          _subject: values._subject,
          email: values.email,
          message: values.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.success);
          if (data.success === "true") {
            router.push({ pathname: "/success", query: values });
          } else {
            setError(data.message);
          }
        })
        .catch((error) => setError(error));
    },
  });

  return (
    <>
      <Seo title="Charlotte Osborne - Contact" description="Description" />
      <Header
        title="Contact"
        subtitle="Send me a message"
        link="Home"
        url="/"
      />
      <div>
        <form onSubmit={formik.handleSubmit} className="max-w-3xl mx-auto">
          {error && <p className="text-red-400">{error}</p>}
          <div className="my-4">
            <label
              htmlFor="name"
              className={`block text-base ${
                formik.touched.name && formik.errors.name
                  ? "text-red-400"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {formik.touched.name && formik.errors.name ? (
                formik.errors.name
              ) : (
                <span title="Required">Name *</span>
              )}
            </label>
            <input
              type="text"
              name="name"
              className={`text-base border-[1px] rounded-md w-full ${
                formik.touched.name && formik.errors.name
                  ? "border-red-400 focus:border-red-400 focus:outline-red-400"
                  : "border-gray-200 focus:border-teal-600 focus:outline-teal-600"
              }`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="email"
              className={`block text-base ${
                formik.touched.email && formik.errors.email
                  ? "text-red-400"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {formik.touched.email && formik.errors.email ? (
                formik.errors.email
              ) : (
                <span title="Required">Email *</span>
              )}
            </label>
            <input
              type="email"
              name="email"
              className={`text-base border-[1px] rounded-md w-full ${
                formik.touched.email && formik.errors.email
                  ? "border-red-400 focus:border-red-400 focus:outline-red-400"
                  : "border-gray-200 focus:border-teal-600 focus:outline-teal-600"
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="_subject"
              className={`block text-base ${
                formik.touched._subject && formik.errors._subject
                  ? "text-red-400"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {formik.touched._subject && formik.errors._subject ? (
                formik.errors._subject
              ) : (
                <span title="Required">Subject *</span>
              )}
            </label>
            <input
              type="text"
              name="_subject"
              className={`text-base border-[1px] rounded-md w-full ${
                formik.touched._subject && formik.errors._subject
                  ? "border-red-400 focus:border-red-400 focus:outline-red-400"
                  : "border-gray-200 focus:border-teal-600 focus:outline-teal-600"
              }`}
              value={formik.values._subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="message"
              className={`block text-base ${
                formik.touched.message && formik.errors.message
                  ? "text-red-400"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {formik.touched.message && formik.errors.message ? (
                formik.errors.message
              ) : (
                <span title="Required">Message *</span>
              )}
            </label>
            <textarea
              name="message"
              className={`text-base border-[1px] rounded-md w-full h-28 ${
                formik.touched.message && formik.errors.message
                  ? "border-red-400 focus:border-red-400 focus:outline-red-400"
                  : "border-gray-200 focus:border-teal-600 focus:outline-teal-600"
              }`}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://charlotteosborne.ca/submitted"
          ></input>
          <button
            type="submit"
            className="bg-teal-600 text-white rounded-md px-3 py-1"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

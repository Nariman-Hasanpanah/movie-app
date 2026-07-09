import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MdLightMode, MdDarkMode, MdBrightness1 } from "react-icons/md";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is a required field"),
  lastName: Yup.string().required("Last Name is a required field"),
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(12).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Please confirm your password")
    .required("Please confirm your password"),
  terms: Yup.boolean().oneOf([true],"You must agree to the terms")
});

const SignUp = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      terms: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      alert("Create account successful");
    },
  });

  return (
    <div id="sign-in-page" className="h-full pb-20 bg-white dark:bg-gray-950">
      <div
        id="toggle-theme-container"
        className="flex justify-end p-8 md:mx-10 lg:mx-50"
      >
        <div
          id="toggle-theme"
          onClick={toggleTheme}
          className={`relative flex flex-col items-center rounded-full border-2 text-xl gap-3 p-0.5 md:p-1 ${darkMode ? "bg-black border-gray-500" : "bg-gray-100 border-gray-300"} sm:flex-row cursor-pointer`}
        >
          <MdLightMode className="text-yellow-400 text-xl md:text-2xl"></MdLightMode>
          <MdDarkMode className="text-yellow-400 text-xl md:text-2xl"></MdDarkMode>
          <MdBrightness1
            id="toggle-ball"
            className={`absolute text-2xl md:text-3xl ${darkMode ? "top-0 md:top-[1px] left-0 text-white" : "bottom-0 md:bottom-[1px] right-0 text-black"}`}
          ></MdBrightness1>
        </div>
      </div>
      <div
        id="sign-in-form"
        className="inter h-auto flex flex-col justify-center items-center p-6 sm:p-10 sm:px-25 border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-900 rounded-xl w-fit mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl text-black dark:text-white text-center font-bold m-5 px-5">
          Create Your Account
        </h1>
        <p className="text-xs sm:text-sm text-black dark:text-white mb-15">
          Please enter your personal information below to create account
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-10">
            <div className="flex flex-col gap-2 justify-center mb-6 sm:mb-3">
              <input
                type="text"
                placeholder="First Name"
                className="border-2 p-2 text-md dark:text-white w-75 sm:w-50 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 rounded-xl"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm">
                  {formik.errors.firstName}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 justify-center mb-3">
              <input
                type="text"
                placeholder="Last Name"
                className="border-2 p-2 text-md dark:text-white w-75 sm:w-50 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 rounded-xl"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center mb-6">
            <input
              type="text"
              placeholder="Email Address"
              className="border-2 p-2 text-md dark:text-white w-75 sm:w-110 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 rounded-xl"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 justify-center mb-6">
            <input
              type="text"
              placeholder="Username"
              className="border-2 p-2 text-md dark:text-white w-75 sm:w-110 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 rounded-xl"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 justify-center mb-6">
            <input
              type="password"
              placeholder="Create Password"
              className="border-2 p-2 text-md dark:text-white w-75 sm:w-110 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 rounded-xl"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-2 p-2 text-md dark:text-white w-75 sm:w-110 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 rounded-xl"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>
          <div className="flex items-center text-xs sm:text-sm gap-2 mb-1">
            <input
              type="checkbox"
              id="terms"
              checked={formik.values.terms}
              onChange={(e) => formik.setFieldValue("terms", e.target.checked)}
            />
            <label htmlFor="terms" className="text-black dark:text-white">I have read and agree to the terms</label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <p className="text-red-500 text-sm">{formik.errors.terms}</p>
          )}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-75 sm:w-110 h-11 rounded-md text-sm sm:text-base mt-5 bg-blue-600 text-white cursor-pointer hover:opacity-70"
          >
            Create account
          </button>
          <p className="text-xs sm:text-sm text-black dark:text-white text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:opacity-70">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

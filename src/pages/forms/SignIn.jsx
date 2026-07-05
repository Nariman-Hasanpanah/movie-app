import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router";

const validationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().min(8).max(12).required(),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: () => {
      alert("Sign in successful");
    },
  });

  return (
    <div id="sign-in-page" className="h-screen p-25 bg-white">
      <div
        id="sign-in-form"
        className="inter h-auto flex flex-col justify-center items-center p-6 sm:p-10 sm:px-15 border border-gray-300 bg-white rounded-xl w-fit mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl text-black text-center font-bold m-5 px-5">
          Sign In
        </h1>
        <p className="text-xs sm:text-sm text-black mb-15">
          Please enter your user name and password to Sign in
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4   ">
          <div className="flex flex-col gap-2 justify-center mb-8">
            <input
              type="text"
              placeholder="Username"
              className="border-2 p-2 text-md w-75 sm:w-110 border-gray-300 bg-white rounded-xl"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <input
              type="password"
              placeholder="Password"
              className="border-2 p-2 text-md w-75 sm:w-110 border-gray-300 bg-white rounded-xl"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <div className="flex justify-end pt-5 text-xs sm:text-sm text-blue-500">
            <Link to="" className=" hover:opacity-70">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-75 sm:w-110 h-11 rounded-md text-sm sm:text-base bg-blue-600 text-white cursor-pointer hover:opacity-70"
          >
            Sign in
          </button>
          <p className="text-xs sm:text-sm text-black text-center">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-blue-500 hover:opacity-70">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

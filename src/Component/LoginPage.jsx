import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Component/loginpage.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    if (data.email == "wecrunchpotheri@gmail.com") {
      if (data.password == "youkundu" || data.password == "test" ) {
        navigate("/home");
      } else {
        alert("password is wrong");
      }
    } else {
      alert("email is wrong");
    }
  };

  return (
    <section className="vh-100 mt-5" style={{ height: 1000 }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://pngimg.com/uploads/kfc_food/kfc_food_PNG13.png"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label ml-3" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  className={`form-control form-control-lg ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Enter a valid email address"
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    Please enter a valid email address
                  </div>
                )}
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <label className="form-label  ml-3" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: true })}
                  className={`form-control form-control-lg ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter password"
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    Please enter your password
                  </div>
                )}
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a
                    className="link-danger"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

import React from "react";
import { useForm } from "react-hook-form";
import { RegisterUser } from "../ApiCall/userApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Toast from "./common/Toast";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },watch
  } = useForm();

  const passwordcheck = watch("password");
 


  const onSubmit = async (data) => {
    console.log(data);
    try {
      let body = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      let response = await RegisterUser(body);
      console.log(response, "ji");
      if (response.sucess) {
        toast.success(response.message);
        navi("/");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      toast.success(err?.message);

      console.log("err", err);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Register
                    </p>
                    <form
                      className="mx-1 mx-md-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className={`form-control ${
                              errors.name ? "is-invalid" : ""
                            }`}
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />
                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                              },
                            })}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                            {...register("password", {
                              required: "Password is required",
                            })}
                          />
                          {errors.password && (
                            <div className="invalid-feedback">
                              {errors.password.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="confirmPassword"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className={`form-control ${
                              errors.confirmPassword ? "is-invalid" : ""
                            }`}
                            {...register("confirmPassword", {
                              required: "Please confirm password",
                              validate: (value) =>
                                value == passwordcheck ||
                                "Passwords do not match",
                            })}
                          />
                          {errors.confirmPassword && (
                            <div className="invalid-feedback">
                              {errors.confirmPassword.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={isSubmitting}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://deliverlogic-common-assets.s3.amazonaws.com/editable/images/cravedel/menuitems/10666565.png"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast />
    </section>
  );
};

export default RegisterPage;

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icons from "../../public/index.js";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/actions/authActions.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);
  
  const userId = queryParams.get("userId");
  const rpKey = queryParams.get("rpKey");
  console.log(userId,rpKey);
  
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [resetError, setResetError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: reset, isLoading } = useMutation({
    mutationFn: async ({ pass1, pass2 }) => {
      if (!userId || !rpKey) {
        throw new Error("Invalid reset link.");
      }
      if (pass1 !== pass2) {
        throw new Error("Passwords do not match.");
      }
      const payload = {
        pass1,
        pass2,
        rp_key: rpKey,
        user_id: parseInt(userId),
      };
      await dispatch(resetPassword(payload));
    },
    onSuccess: () => {
      toast.success("Password reset successfully!");
      setResetError("");
      navigate("/login");
    },
    onError: (error) => {
      setResetError(error.message || "Reset failed. Please try again.");
    },
  });

  const handleReset = handleSubmit((values) => {
    reset({
      pass1: values.password,
      pass2: values.confirmPassword,
    });
  });

  return (
    <div className="signin-page">
      <div className="signin-container text-center">
        <div className="signin-logo">
          <img src={Icons.brandLogo} alt="logo" />
          <h2>Reset Password</h2>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="signin-form">
          <form onSubmit={handleReset}>
            {/* New Password */}
            <div className="form-group">
              <div className="input-inline">
                <input
                  type={isPassword ? "text" : "password"}
                  className="form-control"
                  id="new-password"
                  placeholder="New Password"
                  autoComplete="off"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </span>
                )}
                <span
                  className="input-icons show-password"
                  onClick={() => setIsPassword(!isPassword)}
                >
                  <i
                    className={isPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                  ></i>
                </span>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="form-group">
              <div className="input-inline">
                <input
                  type={isConfirmPassword ? "text" : "password"}
                  className="form-control"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  {...register("confirmPassword", {
                    required: "Confirmation is required",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </span>
                )}
                <span
                  className="input-icons show-password"
                  onClick={() => setIsConfirmPassword(!isConfirmPassword)}
                >
                  <i
                    className={
                      isConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>

            {resetError && (
              <p style={{ color: "red", maxWidth: "300px" }}>{resetError}</p>
            )}

            <button
              type="submit"
              className="btn btn-signin"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Reset"}
            </button>
          </form>
        </div>
      </div>
      <div className="signin-images">
        <img src={Icons.loginImage} alt="reset password" />
      </div>
    </div>
  );
}

export default ResetPassword;

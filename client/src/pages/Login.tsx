import { login } from "@/app/features/authSlice";
import api from "@/configs/api";
import { firebaseAuth } from "@/configs/firebase";
import { getThemeColors } from "@/configs/theme";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Loader2, LockIcon, Mail, User2Icon } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const themeColors = getThemeColors();
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const [state, setState] = useState(urlState|| "login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const {data} = await api.post(`/api/users/${state}`, formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)
      navigate('/app')
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } }; message?: string };
      toast.error(err?.response?.data?.message || err?.message || "Something went wrong")
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleLogin = async () => {
    setIsGoogleSubmitting(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(firebaseAuth, provider);
      const idToken = await result.user.getIdToken();
      const { data } = await api.post("/api/users/google", { idToken });

      dispatch(login(data));
      localStorage.setItem("token", data.token);
      toast.success(data.message);
      navigate("/app");
    } catch (error: unknown) {
      const err = error as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Google sign-in failed",
      );
    } finally {
      setIsGoogleSubmitting(false);
    }
  };

  return (
    <main className="flex items-center justify-center w-full px-4 min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="flex w-full flex-col max-w-96">
       

        <h2 className="text-4xl font-medium text-gray-900">
          {state === "login" ? "Login" : "Sign up"}
        </h2>

        <p className="mt-4 text-base text-gray-500/90">
          Please enter email and password to access.
        </p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-lg overflow-hidden pl-6 gap-2">
            <User2Icon size={16} color="#6B7280"/>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-none outline-none ring-0"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-lg overflow-hidden pl-6 gap-2">
          <Mail size={13} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-lg overflow-hidden pl-6 gap-2">
          <LockIcon size={13} color="#6B7280"/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`mt-4 text-left ${themeColors.text}`}>
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-2 w-full h-11 rounded-lg text-white ${themeColors.bg} hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2`}
        >
          {isSubmitting && <Loader2 className="size-4 animate-spin" />}
          {isSubmitting
            ? state === "login" ? "Logging in..." : "Creating account..."
            : state === "login" ? "Login" : "Sign up"}
        </button>
        <div className="my-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="h-px flex-1 bg-gray-200" />
          OR
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isSubmitting || isGoogleSubmitting}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isGoogleSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <GoogleLogo />
          )}
          {isGoogleSubmitting
            ? state === "login"
              ? "Signing in..."
              : "Signing up..."
            : state === "login"
              ? "Sign in with Google"
              : "Sign up with Google"}
        </button>
        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-500 text-sm mt-3 mb-11"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <a href="#" className={`${themeColors.text} hover:underline`}>
            click here
          </a>
        </p>
      </form>
    </main>
  );
}

const GoogleLogo = () => (
  <svg
    aria-hidden="true"
    className="size-4"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M21.35 12.23c0-.74-.07-1.46-.23-2.14H12v4.05h5.23a4.47 4.47 0 0 1-1.94 2.93v2.44h3.14c1.84-1.7 2.92-4.2 2.92-7.28Z"
    />
    <path
      fill="#34A853"
      d="M12 21.58c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.93-3.31.93-2.54 0-4.7-1.72-5.47-4.03H3.28v2.52A9.74 9.74 0 0 0 12 21.58Z"
    />
    <path
      fill="#FBBC05"
      d="M6.53 13.68A5.85 5.85 0 0 1 6.23 12c0-.58.1-1.14.3-1.68V7.8H3.28A9.74 9.74 0 0 0 2.25 12c0 1.52.36 2.96 1.03 4.2l3.25-2.52Z"
    />
    <path
      fill="#EA4335"
      d="M12 6.29c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.4 14.63 2.42 12 2.42a9.74 9.74 0 0 0-8.72 5.38l3.25 2.52C7.3 8.01 9.46 6.29 12 6.29Z"
    />
  </svg>
);

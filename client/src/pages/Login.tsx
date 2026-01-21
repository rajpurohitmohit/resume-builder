import { login } from "@/app/features/authSlice";
import api from "@/configs/api";
import { getThemeColors } from "@/configs/theme";
import { LockIcon, Mail, User2Icon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const themeColors = getThemeColors();
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const [state, setState] = useState(urlState|| "login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const {data} = await api.post(`/api/users/${state}`, formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)
      navigate('/app')
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } }; message?: string };
      toast.error(err?.response?.data?.message || err?.message || "Something went wrong")
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          className={`mt-2 w-full h-11 rounded-lg text-white ${themeColors.bg} hover:opacity-90 transition-opacity`}
        >
          {state === "login" ? "Login" : "Sign up"}
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

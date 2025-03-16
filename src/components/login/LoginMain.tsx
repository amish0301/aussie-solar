"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const toastId = toast.loading("Verifying Credentials...");
    try {
      e.preventDefault();

      setIsLoading(true);

      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(String(result.error) || "Error while login", { id: toastId });
        setError(result.error);
      } else {
        router.push('/admin');
      }
    } catch (error) {
      console.log('error while login', error);
    } finally {
      toast.dismiss(toastId);
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow-lg" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Admin Login</h2>
          {error && <p className="text-danger">{error}</p>}
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="form-control"
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isLoading}
              style={{ opacity: `${isLoading ? 0.5 : 1}` }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

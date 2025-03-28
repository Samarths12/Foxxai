import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaPhone } from "react-icons/fa";
import {
  auth,
  googleProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  db,
  doc,
  setDoc,
  getDoc,
} from "../firebase"; // Adjust path if needed

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", user.email);
        navigate("/dashboard", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (!isLogin) {
      if (!formData.name || formData.name.length < 2)
        newErrors.name = "Name must be at least 2 characters long";
      if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
        newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.exists() ? userDoc.data() : {};
        const userName = userData.name || user.displayName || "Guest";

        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", formData.email);
        window.dispatchEvent(new Event("storage"));
        navigate("/dashboard", {
          replace: true,
          state: { userName },
        });
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", formData.email);
        window.dispatchEvent(new Event("storage"));
        navigate("/dashboard", {
          replace: true,
          state: { userName: formData.name },
        });
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit:
          error.code === "auth/wrong-password" || error.code === "auth/user-not-found"
            ? "Invalid email or password"
            : error.message,
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await setDoc(
        doc(db, "users", result.user.uid),
        {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          createdAt: new Date().toISOString(),
        },
        { merge: true }
      );
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", result.user.email);
      window.dispatchEvent(new Event("storage"));
      navigate("/dashboard", {
        replace: true,
        state: { userName: result.user.displayName },
      });
    } catch (error) {
      setErrors((prev) => ({ ...prev, submit: error.message }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-purple-100 to-purple-200 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-purple-300">
        <div className="flex mb-8 bg-purple-100 rounded-lg p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-lg transition-all duration-300 ${
              isLogin ? "bg-white shadow-md text-purple-700" : "text-purple-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-lg transition-all duration-300 ${
              !isLogin ? "bg-white shadow-md text-purple-700" : "text-purple-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <FaUser className="text-purple-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ color: "black" }}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm ml-8">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-purple-500" />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    style={{ color: "black" }}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                {errors.mobile && <p className="text-red-500 text-sm ml-8">{errors.mobile}</p>}
              </div>
            </>
          )}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-purple-500" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                style={{ color: "black" }}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm ml-8">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <FaLock className="text-purple-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ color: "black" }}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm ml-8">{errors.password}</p>}
          </div>
          {errors.submit && <p className="text-red-500 text-sm text-center">{errors.submit}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg shadow-sm hover:shadow-md transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaGoogle className="text-red-500" />
            <span>Continue with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
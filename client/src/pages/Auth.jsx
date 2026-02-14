import { signInWithPopup } from "firebase/auth";
import { motion as Motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../utils/firebase.js";

export default function Auth() {
  const handleGoogleAuth = async () => {
    try {
        const response = await signInWithPopup(auth, provider)
        console(response)
    } catch (error) {
        console.log(error)
    }
    ;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-white via-gray-100 to-gray-200 text-black px-6 lg:px-12">
      

      

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* Main Section */}
      <main className="max-w-4xl mx-auto min-h-screen flex items-center relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <Motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              AI{" "}
              <span className="text-blue-700">
                Preparation
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg max-w-xl">
              Generate exam-focused notes, visual analytics, and downloadable
              PDFs tailored to your syllabus
            </p>

            <div className="mt-10 space-y-5 text-gray-700">
              {[
                "AI-generated structured notes",
                "Charts, graphs & visual insights",
                "One-click PDF export",
              ].map((item, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <span>✔</span>
                  <span>{item}</span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* Auth Card */}
          <Motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-3xl p-12"
          >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/40 to-white/10 pointer-events-none" />

            <h3 className="text-3xl font-semibold text-center relative z-10">
              Welcome to AI Prep
            </h3>

            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleGoogleAuth}
              className="relative z-10 mt-10 w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <FcGoogle size={22} />
              Continue with Google
            </Motion.button>
          </Motion.div>
        </div>
      </main>
    </div>
  );
}

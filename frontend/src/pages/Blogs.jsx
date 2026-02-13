import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, Rocket, Calendar, Code, Database, CheckCircle } from "lucide-react";

const GithubButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/github")}
      className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20"
    >
      <Github size={20} />
      Know About Developers
    </button>
  );
};

const Blogs = () => {
  return (
    <main className="pt-16 bg-white">
      {/* BLOG HEADER */}
      <section className="bg-gray-900 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <Rocket className="text-blue-400" size={16} />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Project Roadmap</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-serif leading-tight">
            Building Promos: <span className="text-blue-500">From Planning to Execution</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A detailed breakdown of how Promos was planned, developed, and the roadmap for our upcoming backend phase.
          </p>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-16 text-gray-700 leading-relaxed">

        {/* INTRO */}
        <article className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Idea Behind Promos</h2>
          <p className="text-lg">
            Promos started with a simple observation — most businesses waste money
            on promotions that reach the wrong audience. I wanted to build a
            platform that focuses on <span className="font-semibold text-gray-900 underline decoration-blue-500/30">quality over quantity</span> by targeting users who
            are genuinely interested in a product.
          </p>
        </article>

        {/* PLANNING */}
        <article>
          <div className="flex items-center gap-3 mb-4">
             <Calendar className="text-blue-600" />
             <h2 className="text-2xl font-bold text-gray-900">One Month of Planning & Frontend Execution</h2>
          </div>
          <p className="mb-6">
            I invested more than one month planning and building Promos before
            releasing the first version. This phase was not about speed, but about
            getting the structure right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Clean, responsive UI with Tailwind",
              "Reusable component architecture",
              "Optimized user journeys",
              "Mobile-first responsiveness",
              "Privacy & Trust elements",
              "Intuitive navigation patterns"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <CheckCircle className="text-green-500" size={18} />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </article>

        {/* DEVELOPMENT PROCESS */}
        <article>
          <div className="flex items-center gap-3 mb-4">
             <Code className="text-blue-600" />
             <h2 className="text-2xl font-bold text-gray-900">Development Approach</h2>
          </div>
          <p>
            Instead of building everything at once, I followed an incremental
            development approach. Each section of the website — Hero, Services,
            Insights, Contact, and Documentation — was built and tested separately.
          </p>
        </article>

        {/* BACKEND PLAN */}
        <article className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
             <Database className="text-blue-600" />
             <h2 className="text-2xl font-bold text-gray-900">Backend Roadmap (Appwrite & Future Scale)</h2>
          </div>
          <p className="mb-6">
            The next major phase is backend integration. Currently, I have planned to use <strong>Appwrite</strong> for rapid deployment, with a future roadmap including <strong>Node.js</strong> or <strong>C# (.NET)</strong> for high-scale requirements.
          </p>

          <div className="space-y-3">
            <p className="font-semibold text-blue-900">The backend will handle:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-blue-800">
              <li>• Secure Contact Submissions</li>
              <li>• Lead Management System</li>
              <li>• Campaign Data Storage</li>
              <li>• Admin Dashboard APIs</li>
              <li>• Authentication Control</li>
            </ul>
          </div>
        </article>

        {/* ONE MONTH PLAN */}
        <article>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">One-Month Backend Execution Plan</h2>
          <div className="space-y-4">
            {[
              { w: "Week 1", d: "Database design, API structure, and project setup" },
              { w: "Week 2", d: "Contact form APIs, validation, and notifications" },
              { w: "Week 3", d: "Admin dashboard APIs and data management" },
              { w: "Week 4", d: "Testing, optimization, and deployment" },
            ].map((plan, i) => (
              <div key={i} className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <span className="font-bold text-blue-600 whitespace-nowrap">{plan.w}:</span>
                <span className="text-gray-600">{plan.d}</span>
              </div>
            ))}
          </div>
        </article>

        {/* CONCLUSION */}
        <article className="pt-8 border-t border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="max-w-2xl mx-auto italic text-gray-500">
            "Promos is not a rushed project — it is the result of careful planning,
            disciplined development, and a clear roadmap. By investing time in the
            foundation, the platform is built to scale smoothly in the future."
          </p>
        </article>

      </section>

      {/* DEVELOPER SECTION */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-b from-gray-50 to-white p-10 rounded-[2rem] border border-gray-100 shadow-sm text-center">
          <h3 className="text-gray-900 font-bold text-xl mb-2">Want to know about the creators?</h3>
          <p className="text-gray-500 mb-8">Click below to see the GitHub profiles and contribution history.</p>
          <div className="flex justify-center">
            <GithubButton />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
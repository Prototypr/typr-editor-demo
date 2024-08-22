import React from "react";
import Tiptypr from "tiptypr";

import {
  ArrowRight,
  Edit3,
  Server,
  Zap,
  Settings,
  Users,
  Clock,
  GitBranch,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <svg
            class="h-8 my-auto w-auto"
            width="164"
            height="164"
            viewBox="0 0 164 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_12)">
              <rect width="164" height="164" fill="white"></rect>
              <rect
                x="6"
                y="6"
                width="152"
                height="152"
                rx="6"
                stroke="black"
                stroke-width="12"
              ></rect>
              <path
                d="M111.138 45.058L89.022 45.446V121.688L104.736 124.986C104.736 128.995 103.637 131 101.438 131L82.62 129.836L63.414 131C60.9567 131 59.728 128.995 59.728 124.986L75.442 121.688V45.446L53.52 45.058L51.58 58.638C51.58 60.578 48.9933 61.548 43.82 61.548L41.88 38.656C42.1387 36.9747 44.0787 36.134 47.7 36.134L82.62 36.91L116.958 36.134C120.579 36.134 122.519 36.9747 122.778 38.656L120.838 61.548C115.665 61.548 113.078 60.578 113.078 58.638L111.138 45.058Z"
                fill="black"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1_12">
                <rect width="164" height="164" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          {/* <img src="/api/placeholder/150/50" alt="Typr Logo" className="h-8" /> */}
          <div>
            <a
              href="https://prototypr.io/typr"
              className="text-gray-700 hover:text-gray-800 font-medium mr-4"
            >
              Prototypr
            </a>
            <a
              href="https://github.com/prototypr/typr"
              className="text-gray-700 hover:text-gray-800 font-medium mr-4"
            >
              GitHub
            </a>
            <a
              href="/demo"
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Customise it
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Typr Editor</h1>
          <p className="text-xl text-gray-700 mb-8">
            An open-source editor for publishers, with <span className="hidden md:inline"><br /></span> draft/publish
            workflow and user management.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/prototypr/typr"
              target="_blank"
              className="text-gray-800 text-lg font-bold transition flex items-center"
            >
              <GitBranch className="mr-2" size={20} />
              Fork on GitHub
            </a>
          </div>
        </section>
        <section className="container -mt-20 mx-auto px-4 py-16 text-center">
          <div className="browser-mockup">
            <div className="browser-toolbar">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-address-bar">
                <span>https://</span>typr.dev/demo
              </div>
            </div>
            <div className="browser-content">
              <iframe
                src="/demo"
                className="w-full h-[700px] border-0"
                title="Typr Editor Demo"
              ></iframe>
            </div>
          </div>
        </section>
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
            <div
              className="relative"
              style={{ width: "300px", height: "169px" }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CewmZi0Q5mk"
                title="Typr Editor Demo"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              ></iframe>
              {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-20 rounded-md pointer-events-none"></div> */}
            </div>
            <p className="text-sm text-gray-800 mt-2 text-center">
              Typr Editor Demo
            </p>
          </div>
        </div>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Built for Publishers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Edit3 size={32} />}
                title="React Editor"
                description="Easily embed Typr in your React or Next.js projects."
              />
              <FeatureCard
                icon={<Server size={32} />}
                title="Universal CMS Compatibility"
                description="Works with any CMS backend such as Strapi, WordPress, and custom CMS solutions."
              />
              <FeatureCard
                icon={<Zap size={32} />}
                title="Publish Workflow"
                description="Configurable draft/pending/publish workflow for content review and management."
              />
              <FeatureCard
                icon={<Settings size={32} />}
                title="Customizable UI"
                description="Offers a customizable user menu dropdown and editor navigation to match your application's design."
              />
              <FeatureCard
                icon={<Users size={32} />}
                title="Admin Controls"
                description="Hide fields from the settings panel and editor for admin-only access."
              />
              <FeatureCard
                icon={<Clock size={32} />}
                title="Autosave"
                description="Automatic saving of content to ensure no work is lost during editing."
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Typr?</h2>
          <div className="max-w-3xl text-xl max-w-[40rem] mx-auto">
            <p className="text-gray-700 mb-4">
              Typr (made with <a href="https://tiptap.dev" target="_blank" className="text-blue-700 hover:text-blue-800 font-medium">TipTap</a>) was built to streamline the process of adding a rich editing
              experience with publishing and autosaving capabilities to any
              React project. Originally developed for{" "}
              <a
                href="https://prototypr.io"
                target="_blank"
                className="text-blue-700 hover:text-blue-800 font-medium"
              >
                Prototypr
              </a>
              , a platform built with <a href="https://strapi.io" target="_blank" className="text-blue-700 hover:text-blue-800 font-medium">Strapi</a> and <a href="https://nextjs.org" target="_blank" className="text-blue-700 hover:text-blue-800 font-medium">Next.js</a>, Typr has evolved into
              a standalone package.
            </p>
            <p className="text-gray-700 mb-4">
              The goal is to provide developers with a flexible, and
              easy-to-integrate editor that handles content loading,
              creation, and auto-saving out of the box. By adding your user data
              and database props, you get a fully functional editor with draft
              and publishing workflows, saving you time and effort in
              implementation.
            </p>
            <p className="text-gray-700">
              If you have any questions or feedback, please reach out to me on <a href="https://x.com/graeme_fulton" target="_blank" className="text-blue-700 hover:text-blue-800 font-medium">X</a>.
              Also, <a href="https://github.com/prototypr/typr" target="_blank" className="text-blue-700 hover:text-blue-800 font-medium">star it on GitHub</a> if it's useful.
            </p>
            <div className="mt-8 flex p-4 bg-gray-50 hover:bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-fit mx-auto border border-gray-200 items-center justify-center">
              <a
                href="https://x.com/graeme_fulton"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-800 font-medium"
              >
                <img
                  src="https://unicorn-cdn.b-cdn.net/8ab28c79-e8af-40b6-960c-4493ba068c82/-/crop/883x787/311,0/-/preview/image.png?width=200&height=180"
                  alt="Graeme Fulton"
                  className="rounded-full w-16 h-16 mr-4 object-cover"
                />
              </a>
              <div className="flex flex-col">
                <a
                  href="https://x.com/graeme_fulton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-base hover:text-gray-800 font-medium"
                >
                  By Graeme
                </a>
                <p className="text-gray-500 text-sm">
                    @graeme_fulton
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Open for Contributions
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 text-xl mb-6">
                Typr is an open-source project that's actively maintained and
                open for contributions.
              </p>
              <div className="flex justify-center items-center space-x-4">
                <GitBranch size={24} className="text-blue-600" />
                <p className="text-gray-700 text-lg font-medium">
                  Join us on GitHub and help shape the future of Typr!
                </p>
              </div>
              <a
                target="_blank"
                href="https://github.com/prototypr/typr"
                className="inline-block mt-6 bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
              >
                Contribute on GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Getting Started
          </h2>
          <div className="bg-gray-800 text-white p-4 rounded-md max-w-2xl mx-auto">
            <code>npm install tiptypr</code>
          </div>
          <p className="mt-4 text-center text-gray-700">
            Add Typr to your project and start creating rich content experiences
            in minutes.
          </p>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/prototypr/typr"
              target="_blank"
              className="text-gray-700 text-lg hover:text-gray-800 font-medium"
            >
              Read the full documentation →
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Prototypr. All rights reserved.</p>
          <div className="mt-4">
            <a
              href="https://github.com/prototypr/typr"
              className="text-gray-400 hover:text-white mr-4"
            >
              GitHub
            </a>
            <a
              href="https://prototypr.io"
              className="text-gray-400 hover:text-white mr-4"
            >
              Prototypr
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg text-center">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default LandingPage;

import { motion } from "motion/react";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Home page</h1>

      <h2 className="mt-3">
        Declarative Routing with &lt;BrowserRouter&gt; and &lt;Routes&gt;
      </h2>

      <p>
        React Router enables declarative routing for React applications. The
        <code> &lt;BrowserRouter&gt; </code> component wraps your entire app and
        uses the HTML5 history API to keep your UI in sync with the URL.
      </p>

      <br />

      <p>
        Inside <code> &lt;BrowserRouter&gt; </code>, you define routes using the
        <code> &lt;Routes&gt; </code> and <code> &lt;Route&gt; </code>{" "}
        components. This approach allows you to map different URLs to specific
        components in a clean and readable way.
      </p>

      <br />
      <hr className="border-t border-gray-300" />

      <h2 className="mt-3">Example</h2>
      <div class=" bg-[#1e1e1e] text-sm font-mono rounded-lg p-4 overflow-x-auto">
        <pre class="bg-[#1e1e1e]">
          <code>
            <span class="text-purple-400">import</span>{" "}
            <span className="text-yellow-400">
              {"{"} <span className="text-blue-400">browser</span> {"}"}{" "}
            </span>
            <span class="text-purple-400">from</span>{" "}
            <span class="text-orange-300">
              'react-router-dom'<span className="text-white">;</span>
            </span>
            <br />
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

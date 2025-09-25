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

      <p>
        Inside <code> &lt;BrowserRouter&gt; </code>, you define routes using the
        <code> &lt;Routes&gt; </code> and <code> &lt;Route&gt; </code>{" "}
        components. This approach allows you to map different URLs to specific
        components in a clean and readable way.
      </p>

      <h2 className="mt-3">Example</h2>

      <pre>
        <code>{`
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
        `}</code>
      </pre>
    </motion.div>
  );
}

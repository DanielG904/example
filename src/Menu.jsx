import { useLocation } from "react-router-dom";
import React from "react";
import { motion } from "motion/react";

export default function Menu({ children }) {
  const location = useLocation();
  const links = React.Children.toArray(children);

  return (
    <>
      <header className="bg-primary-500 text-white">
        <div className="container flex justify-between min-h-[15vh] items-stretch flex-wrap">
          <h1 className="font-headline text-3xl grid place-items-center">
            Website
          </h1>
          <nav className="flex">
            <ul className="flex gap-10 relative">
              {links.map((link) => {
                const isCurrentPage = link.props.to == location.pathname;

                return (
                  <>
                    <li
                      className={`grid place-items-center grid-cols-1 grid-rows-1 ${
                        isCurrentPage ? "font-extrabold" : null
                      }`}
                    >
                      {link}
                      {isCurrentPage && (
                        <motion.div
                          className="w-[2px] h-5 bg-white bottom-0 absolute bottom-0 h-[20%]"
                          layoutId="current-indicator"
                          transition={{
                            duration: 0.2,
                            ease: [1, -0.01, 0.72, 1.01],
                          }}
                        ></motion.div>
                      )}
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

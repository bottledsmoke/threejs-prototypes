import React from "react";
import logo from "logo.svg";
import { NavLink } from "react-router-dom";
import colors from "colors.module.css";

const Nav = () => {
  const links = [
    { href: "/", label: "Home" },
    {
      href: "/artwork",
      label: "Artwork",
    },
    {
      href: "/prototypes",
      label: "Prototypes",
    },
    {
      href: "/music",
      label: "Music",
    },
    {
      href: "/code-snippets",
      label: "Code Snippets",
    },
  ];

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ height: "30px", width: "30px" }}>
                <img
                  src={logo}
                  style={{ display: "inine-block" }}
                  alt="Tyler Hellner.com logo"
                />
              </div>
              <h3
                className={colors.white}
                style={{
                  textAlign: "left",
                  margin: "-2px 0 0 20px",
                }}
              >
                Tyler <br /> Hellner
              </h3>
            </div>
          </NavLink>
        </li>
        <ul>
          {links.map(({ href, label }, i) => (
            <li key={`${i}-${href}`}>
              <NavLink
                to={href}
                activeClassName={"active"}
                exact={href === "/"}
                className={colors.link}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="call-to-action">
            <NavLink
              to="/hire"
              activeClassName={"active"}
              className={colors.link}
            >
              Hire me!
            </NavLink>
          </li>
        </ul>
      </ul>

      <style>{`
        nav {
          text-align: center;
          height: 80px;
        }
        h3 {
          font-size: 1rem;
          font-weight:200;
          line-height: 18px;
        }
        ul {
          list-style-type: none;
          display: flex;
          margin: 0 2rem;
          padding: 0;
          height: 100%;
          justify-content: space-between;
          align-items: center;
        }
        li {
          padding: 0 1rem 0 0;
        }
        a.active {
          text-decoration: underline;
        }
        ul :last-child {
          padding-right: 0;
          margin-right: 0;
        }
        a {
          text-decoration: none;
          font-size: 13px;
        }
        .call-to-action {
          font-weight: 800;
        }
      `}</style>
    </nav>
  );
};

export default Nav;

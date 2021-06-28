import React from "react";
import { Link } from "react-router-dom";
import colors from "colors.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="flex-container-footer">
        <section className="flex-item-footer">
          <h3 className={colors.white}>Footer Thing</h3>
          <Link to="/" className={colors.link}>
            Footer Link
          </Link>
        </section>
        <section className="flex-item-footer">
          <h3 className={colors.white}>Footer Thing</h3>
          <Link to="/" className={colors.link}>
            Footer Link
          </Link>
        </section>
        <section className="flex-item-footer last-item">
          <h3 className={colors.white}>Footer Thing</h3>
          <Link to="/" className={colors.link}>
            Footer Link
          </Link>
        </section>
      </div>
      <style>{`
      .flex-container-footer {
        display: flex;
        height: 20vh;
        padding: 2rem;
      }
      .flex-item-footer {
        flex: 1;
        text-align: left;
        border-right: 2px solid white;
        padding: 0 1.5rem 1.5rem;
      }
      .flex-container-footer :last-child {
        margin-right: 0;
        border: none;
      }
      `}</style>
    </footer>
  );
};

export default Footer;

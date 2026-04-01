import React from "react";
import "./header.css";

export default function AppHeader({
  homeHref = "https://www.mfalana.dev/",
  brandText = "MFALANA",
  title,
  right,
  children
}) {
  return (
    <header className="app-header-bar" role="banner" aria-label="Site header">
      <div className="app-header-bar__inner">
        <div className="app-header-bar__left">
          <a className="app-header-bar__brand" href={homeHref} aria-label="Home">
            <span className="app-header-bar__brand-text">{brandText}</span>
          </a>

          {title ? (
            <>
              <span className="app-header-bar__sep" aria-hidden="true">|</span>
              <span className="app-header-bar__title" title={title}>{title}</span>
            </>
          ) : null}
        </div>

        <div className="app-header-bar__right">
          {right}
          {children}
        </div>
      </div>
    </header>
  );
}

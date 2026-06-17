import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "250px",
          background: "#111827",
          padding: "20px",
        }}
      >
        <h1 style={{ marginBottom: "40px" }}>
          💰 Mama Samapaththu
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <a href="/" style={linkStyle}>Dashboard</a>

          <a
            href="/bank-accounts"
            style={linkStyle}
          >
            Bank Accounts
          </a>

          <a href="#" style={linkStyle}>Investments</a>

          <a href="#" style={linkStyle}>EPFO</a>

          <a href="#" style={linkStyle}>Analytics</a>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};

export default Layout;
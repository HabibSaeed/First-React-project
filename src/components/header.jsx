import React from "react";

const Header = () => {
    const myName = "Habib";

    return (
        <header style={headerStyle}>
            <nav style={navbarStyle}>
                <h1 style={logoStyle}>{myName}'s Food App</h1>
                <ul style={navListStyle}>
                    <li style={navItemStyle}>Home</li>
                    <li style={navItemStyle}>Menu</li>
                    <li style={navItemStyle}>About</li>
                    <li style={navItemStyle}>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    borderBottom: "5px solid #333",
};

const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "800px",
    margin: "0 auto",
};

const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
};

const navListStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
};

const navItemStyle = {
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
};

export default Header;

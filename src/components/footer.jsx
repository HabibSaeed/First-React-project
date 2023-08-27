import React from "react";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Habib Saeed's Food App. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    marginTop: "auto",
};

export default Footer;

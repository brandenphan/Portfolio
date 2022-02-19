import React from "react";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import About from "../components/AboutComponents/About";
import AboutFooter from "../components/AboutComponents/AboutFooter";

export default function Index() {
    return (
        <Layout>
            <div style={{height: "85vh"}}>
                <NavBar />
                <About />
            </div>

            <AboutFooter />
        </Layout>

    );
}


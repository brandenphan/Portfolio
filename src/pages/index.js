import React from "react";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import About from "../components/AboutComponents/About";
import AboutFooter from "../components/AboutComponents/AboutFooter";
import { graphql } from "gatsby";

export default function Index({ data }) {
    return (
        <Layout>
            <div style={{height: "85vh"}}>
                <NavBar />
                <About siteData={data} />
            </div>

            <AboutFooter siteData={data} />
        </Layout>

    );
}

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
                intro
                name
                jobTitle
                designedBy
                copyright
            }
        }
    }
`
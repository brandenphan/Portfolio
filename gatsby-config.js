module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        intro: "Hi, I'm",
        name: "Branden Phan",
        jobTitle: "Software Developer",
        description: "A 3rd year computer science student at the University of Guelph",
        designedBy: "Developed by Branden Phan",
        copyright: "Copyright © 2022 - All Rights Reserved.",
    },
    plugins: [
        "gatsby-transformer-remark",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdowns`,
                path: `${__dirname}/src/markdowns/`,
            },
        }
    ]
}
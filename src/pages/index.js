import * as React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Lee Penney - Developer - Portfolio</title>
      <h1>Hi, I'm Lee</h1>
      <div id="icons">
        <a href="https://www.linkedin.com/in/lee-penney-4b38aa43/">
          <LinkedInImage/>
        </a>
        <a href="https://github.com/leepenney">
          <GitHubImage/>
        </a>
      </div>
      <section id="about">
        <h2>About Me</h2>
        <p>{parse(data.allContentfulPage.edges[0].node.pageText.childMarkdownRemark.html)}</p>
      </section>
      <section id="portfolio">
        <h2>Porfolio</h2>
        <div class="grid">
          {data.allContentfulProject.edges.map( ({ node }) => (
            <div class="project-card">
              {node.projectImage ? parse(`<img src="${node.projectImage.url}" alt="Screenshot of ${node.projectName}">`) : ''}
              <h3>{node.projectName}</h3>
              {parse(node.projectDescription.childMarkdownRemark.html)}
              {parse(Object.values(node.projectTech).map(val => `<span class="project-tag">${val}</span>`).join(''))}
              {node.projectLink ? parse(`<a href="${node.projectLink}">See for Yourself &#10132;</a>`) : parse('<button class="disabled">Not Currently Online</button>')}
            </div>
          ))}
        </div>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <form name="contact" data-netlify="true">
          <label for="enquirer">Your Name</label>
          <input type="text" name="enquirer" required />
          <label for="email">Your Email Address</label>
          <input type="email" name="email" required />
          <label for="message">Your Message</label>
          <textarea name="message" required></textarea>
          <button type="submit">Reach Out</button>
        </form>
      </section>
      <footer>&copy; Lee Penney</footer>
    </main>
  )
}

export const LinkedInImage = () => {
	return (
    <svg width="25px" height="25px" viewBox="0 0 25 25" role="img" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
	)
}

export const GitHubImage = () => {
  return (
    <svg viewBox="0 0 33 33" width="25" height="25" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
      <g>
        <path d="M 16,0C 7.163,0,0,7.163,0,16s 7.163,16, 16,16s 16-7.163, 16-16S 24.837,0, 16,0z M 25.502,25.502 c-1.235,1.235-2.672,2.204-4.272,2.881c-0.406,0.172-0.819,0.323-1.238,0.453L 19.992,26.438 c0-1.26-0.432-2.188-1.297-2.781 c 0.542-0.052, 1.039-0.125, 1.492-0.219s 0.932-0.229, 1.438-0.406s 0.958-0.388, 1.359-0.633s 0.786-0.563, 1.156-0.953s 0.68-0.833, 0.93-1.328 s 0.448-1.089, 0.594-1.781s 0.219-1.456, 0.219-2.289c0-1.615-0.526-2.99-1.578-4.125c 0.479-1.25, 0.427-2.609-0.156-4.078l-0.391-0.047 c-0.271-0.031-0.758,0.083-1.461,0.344s-1.492,0.688-2.367,1.281c-1.24-0.344-2.526-0.516-3.859-0.516c-1.344,0-2.625,0.172-3.844,0.516 c-0.552-0.375-1.075-0.685-1.57-0.93c-0.495-0.245-0.891-0.411-1.188-0.5s-0.573-0.143-0.828-0.164s-0.419-0.026-0.492-0.016 s-0.125,0.021-0.156,0.031c-0.583,1.479-0.635,2.839-0.156,4.078c-1.052,1.135-1.578,2.51-1.578,4.125c0,0.833, 0.073,1.596, 0.219,2.289 s 0.344,1.286, 0.594,1.781s 0.56,0.938, 0.93,1.328s 0.755,0.708, 1.156,0.953s 0.854,0.456, 1.359,0.633s 0.984,0.313, 1.438,0.406 s 0.951,0.167, 1.492,0.219c-0.854,0.583-1.281,1.51-1.281,2.781l0,2.445 c-0.472-0.14-0.937-0.306-1.394-0.5 c-1.6-0.677-3.037-1.646-4.272-2.881c-1.235-1.235-2.204-2.672-2.881-4.272C 2.917,19.575, 2.563,17.815, 2.563,16 s 0.355-3.575, 1.055-5.23c 0.677-1.6, 1.646-3.037, 2.881-4.272s 2.672-2.204, 4.272-2.881 C 12.425,2.917, 14.185,2.563, 16,2.563s 3.575,0.355, 5.23,1.055c 1.6,0.677, 3.037,1.646, 4.272,2.881 c 1.235,1.235, 2.204,2.672, 2.881,4.272C 29.083,12.425, 29.438,14.185, 29.438,16s-0.355,3.575-1.055,5.23 C 27.706,22.829, 26.737,24.267, 25.502,25.502z" fill="rgba(255,255,255,.5)">
        </path>
      </g>
    </svg>
  )
}

export default IndexPage

export const projectsQuery = graphql`query MyQuery {
  allContentfulProject(sort: {fields: [createdAt], order: DESC}) {
    edges {
      node {
        projectName
        projectTech
        projectLink
        projectDescription {
          childMarkdownRemark {
            html
          }
        }
        projectImage {
          url
        }
      }
    }
  }
  allContentfulPage(limit: 1) {
    edges {
      node {
        pageText {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}`
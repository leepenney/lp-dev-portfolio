import * as React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Lee Penney - Developer - Portfolio</title>
      <h1>Hi, I'm Lee</h1>
      <section id="about">
        <h2>About Me</h2>
        <p>{parse(data.allContentfulPage.edges[0].node.pageText.childMarkdownRemark.html)}</p>
      </section>
      <section id="portfolio">
        <h2>Porfolio</h2>
        <div class="grid">
          {data.allContentfulProject.edges.map( ({ node }) => (
            <div class="project-card">
              {node.projectImage ? parse(`<img src="${node.projectImage.url}">`) : ''}
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
      </section>
    </main>
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
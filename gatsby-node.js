// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = graphql`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `

//   // Create paginated pages for posts
//   const postPerPage = 3

//   const numPage = Math.ceil(data.allMdx.edges.length / postPerPage)

//   Array.from({ length: numPage }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? "/" : `/${i + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numPage,
//         currentPage: i + 1,
//       },
//     })
//   })

//   // Create single blog post
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id

//     actions.createPages({
//       path: slug,
//       component: require.resolve("./src/templates/singlePost.js"),
//       context: {id}
//     })
//   })
// }

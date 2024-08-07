import axios from "axios";
import { BlogType, validateBlog } from "./types";

const GET_USER_ARTICLES = `
query Publication($id: ObjectId = "66213f8be5371b46eac0e05e") {
  publication(id: $id) {
    author{
      profilePicture
    }
    posts(first: 50) {
      edges {
        node {
          title
          url
          views
          coverImage {
            url
          }
          publishedAt,
          readTimeInMinutes
        }
      }
    }
  }
}
`;

export const fetchBlogs = async () => {
  const res = await axios.post("https://gql.hashnode.com/", {
    query: GET_USER_ARTICLES,
  });
  const resp: BlogType[] = [];
  for (const edge of res.data.data.publication.posts.edges) {
    const parsedNode = validateBlog.safeParse(edge.node);
    if (parsedNode.success) {
      resp.push(parsedNode.data);
    }
  }
  const blogs = resp
    .sort((a, b) => b.views - a.views)
    .filter((blog) => blog.views !== 0);
  return {
    blogs: blogs.length > 4 ? blogs.slice(0, 4) : blogs,
    authorPic: res.data.data.publication.author.profilePicture,
  };
};

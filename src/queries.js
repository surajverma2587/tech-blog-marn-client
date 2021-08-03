import { gql } from "@apollo/client";

export const BLOGS = gql`
  query Query {
    blogs {
      id
      title
      content
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const MY_BLOGS = gql`
  query Query($blogsUserId: ID) {
    blogs(userId: $blogsUserId) {
      id
      title
      content
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const BLOG = gql`
  query Query($blogId: ID!) {
    blog(id: $blogId) {
      id
      title
      content
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

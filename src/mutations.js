import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($signUpInput: SignUpInput!) {
    signUp(input: $signUpInput) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const CREATE_BLOG = gql`
  mutation Mutation($createBlogInput: BlogInput!) {
    createBlog(input: $createBlogInput) {
      id
    }
  }
`;

// export const UPDATE_BLOG = gql``;

// export const DELETE_BLOG = gql``;

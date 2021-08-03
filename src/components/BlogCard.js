import Card from "react-bootstrap/Card";

const BlogCard = ({ title, content, firstName, lastName, isMyBlog, id }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Created by: {firstName} {lastName}
        </Card.Subtitle>
        <Card.Text>{content}</Card.Text>
        {isMyBlog && (
          <>
            <Card.Link href={`/edit-blog/${id}`}>Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default BlogCard;

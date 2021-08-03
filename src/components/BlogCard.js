import Card from "react-bootstrap/Card";

const BlogCard = ({ title, content }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Created by: Bob Smith
        </Card.Subtitle>
        <Card.Text>{content}</Card.Text>
        <Card.Link href="#">View</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;

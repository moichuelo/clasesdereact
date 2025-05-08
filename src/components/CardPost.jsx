import { Link } from "react-router-dom";

function CardPost(props) {
    const { post } = props;
    return (
        <article className="borde">
            <h2>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.body}</p>
        </article>
    );
}

export default CardPost;

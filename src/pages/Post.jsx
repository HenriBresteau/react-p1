import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then((result) => setPost(result.data));
    }, [id]);
    return (
        <article className="mt-5">
            <h4 className="text-body-secondary text-uppercase fs-4 border-bottom">
                {post.title}
            </h4>
            <div className="my-2 text-dark fw-medium lh-lg">
                <p>{post.body}</p>
            </div>
        </article>
    );
}

export default Post;

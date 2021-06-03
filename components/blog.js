export default function blog(props) {
    const blogs = props.blogs;
    return (
        <section className="blog">
            <div className="container">
                <center className="title">Blogs </center>
                <ul className="posts">
                    {blogs.map((blog) => (
                        <li className="post" key={blog._id}>



                            <div className="post-image-wrapper">
                                <div style={{ backgroundImage: `url(/api/blogs/images/${blog._id})` }} className="postimg"></div>
                            </div>
                            <div className="post-content">
                                <div className="post-divider">
                                    <h5>{blog.title}</h5>
                                    <div><a href={`/blogs/${blog._id}`}>more</a></div>

                                </div>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </section>

    )
}
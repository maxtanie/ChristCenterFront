import React, { useState, useEffect } from "react";
import Posts from "./Posts/Posts";
import Pagination from "./Pagination/Pagination";
import axios from "axios";
// import { NavLink } from "react-router-dom";

const Teachings = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8000/teachings/adults");
      setPosts(res.data);
      setLoading(false);
    };

    // const fetchPostAdults = async () => {
    //   setLoading(true);
    //   const res = await axios.post("http://localhost:8000/teachings/adults");
    //   setPosts(res.data);
    //   setLoading(false);
    // };

    fetchPosts();
    // fetchPostAdults();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Teachings;

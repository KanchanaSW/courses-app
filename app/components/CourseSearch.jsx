"use client";
import { useState } from "react";
import React from "react";

const CourseSearch = ({getSearchResults}) => {
  const [query, setQuery] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch(`/api/courses/search?query=${query}`);

    const courses = await res.json();
    getSearchResults(courses);

  };

  return (
    <form className="search-form" onSubmit={handelSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;

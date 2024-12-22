import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../components/Navbar.jsx";
import RepositoryItem from "./RepositoryItem.jsx";
import Button from "../../components/Button.jsx";

const Repositories = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarActive((prev) => !prev);
  };

  // Remove "active" class if width > 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for repository items
  const repositories = [
    {
      name: "design-system",
      badge: "Public",
      tech: "React",
      memory: "7320",
      lastUpdated: "1 day",
    },
    {
      name: "codeant-ci-app",
      badge: "Private",
      tech: "JavaScript",
      memory: "5871",
      lastUpdated: "2 days",
    },
    {
      name: "analytics-dashboard",
      badge: "Private",
      tech: "Python",
      memory: "4521",
      lastUpdated: "5 days",
    },
    {
      name: "mobile-app",
      badge: "Public",
      tech: "Swift",
      memory: "3096",
      lastUpdated: "3 days",
    },
    {
      name: "e-commerce-platform",
      badge: "Private",
      tech: "Java",
      memory: "6210",
      lastUpdated: "6 days",
    },
    {
      name: "blog-website",
      badge: "Public",
      tech: "HTML/CSS",
      memory: "1876",
      lastUpdated: "4 days",
    },
    {
      name: "social-network",
      badge: "Private",
      tech: "PHP",
      memory: "5432",
      lastUpdated: "7 days",
    },
  ];

  // Filter repositories based on search query
  const filteredRepositories = repositories.filter((repository) =>
    repository.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <Sidebar isSidebarActive={isSidebarActive} />
      <Navbar
        isSidebarActive={isSidebarActive}
        toggleSidebar={toggleSidebar}
      />{" "}
      {/*for small screens*/}
      <div className="repository-container">
        <div className="right" id="right-container">
          <div className="top">
            <div className="top1">
              <div className="head">
                <h1>Repositories</h1>
                <p>33 total repositories</p>
              </div>

              {/* Buttons */}
              <div className="buttons">
                <Button text="Refresh All" icon_url="/images/refresh.svg" />
                <Button
                  text="Add Repository"
                  icon_url="/images/add-repo.svg"
                  primary={true}
                />
              </div>
            </div>

            {/* SearchBar */}
            <div className="search">
              <img src="/images/search.svg" alt="" />
              <input
                type="text"
                placeholder="Search Repositories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Repository List */}
          <div className="box-container">
            {filteredRepositories.length === 0 ? (
              <p style={{ padding: "24px" }}>No repositories found</p>
            ) : (
              filteredRepositories.map((repository, index) => (
                <RepositoryItem
                  key={index}
                  name={repository.name}
                  badge={repository.badge}
                  tech={repository.tech}
                  memory={repository.memory}
                  lastUpdated={repository.lastUpdated}
                />
              ))
            )}
          </div>

          {/* Background Overlay */}
          {isSidebarActive && <div id="bg-cover"></div>}
        </div>
      </div>
    </div>
  );
};

export default Repositories;

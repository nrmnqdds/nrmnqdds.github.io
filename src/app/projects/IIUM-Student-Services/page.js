"use client";

import React, { Component } from "react";

export default class ISS extends Component {
  state = {
    commitData: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    // Replace these values with your own repository information
    const owner = "qryskalyst20";
    const repo = "IIUM-Student-Services";

    // Fetch commit data from GitHub API
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          commitData: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      });
  }

  render() {
    const { commitData, isLoading, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="bg-[#121212] w-screen min-h-screen">
        <h2>Commit History</h2>
        <ul>
          {commitData.map((commit) => (
            <li key={commit.sha}>{commit.commit.message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

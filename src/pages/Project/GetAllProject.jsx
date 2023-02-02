import React, { Fragment, useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { GetAllProjectAction } from "../../redux/Actions/ProjectAction";
import { history } from "../../App";
import { projectServices } from "../../services/ProjectServices";

export default function GetAllProject() {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Project name",
      dataIndex: "name",

      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },

    {
      title: "Category name",
      dataIndex: "category",
      filters: [
        {
          text: "Dự án phần mềm",
          value: "Dự án phần mềm",
        },
        {
          text: "Dự án di động",
          value: "Dự án di động",
        },
        {
          text: "Dự án web",
          value: "Dự án web",
        },
      ],
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: "Creator",
      dataIndex: "creator",
    },
    {
      title: "Members",
      dataIndex: "members",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const [listProject, setListProject] = useState([]);
  const [keySearch, setKeySearch] = useState("");

  useEffect(() => {
    projectServices
      .getAllProject()
      .then((resuilt) => {
        setListProject(resuilt.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderListProject = () => {
    return listProject
      .filter((project) =>
        project.projectName.toLowerCase().includes(keySearch)
      )
      .map((project, index) => {
        return {
          key: index + 1,
          id: project.id,
          name: (
            <p
              style={{
                color: "#0000CD",
              }}
            >
              {project.projectName}
            </p>
          ),
          category: project.categoryName,
          creator: project.creator.name,
          members: project.members.slice(0, 3).map((user, index) => {
            if (index == 2) {
              return <button className="buttonMembers">+n</button>;
            }
            return (
              <Fragment key={index}>
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                  src={user.avatar}
                  alt=""
                />
              </Fragment>
            );
          }),
          action: "...",
        };
      });
  };
  return (
    <div className="getProject">
      <div className="getProject-title">
        <h1>Projects</h1>
        <button
          onClick={() => {
            history.push("/create");
          }}
        >
          Create Project
        </button>
      </div>
      <div className="input-project">
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setKeySearch(e.target.value)}
        />
        <span className="iconInput-project">
          <i className="fa fa-search"></i>
        </span>
      </div>
      <Table
        columns={columns}
        dataSource={renderListProject()}
        onChange={onChange}
      />
    </div>
  );
}

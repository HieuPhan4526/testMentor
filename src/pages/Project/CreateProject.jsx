import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateProjectAction } from "../../redux/Actions/ProjectAction";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

export default function CreateProject() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    projectName: "",
    category: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    projectName: "",
    category: "",
  });
  const handleChange = (e) => {
    let { value, name } = e.target;
    let newValues = { ...values, [name]: value };
    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = name + " is required";
    }
    let newErrors = { ...errors, [name]: errorMessage };
    setValues(newValues);
    setErrors(newErrors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in errors) {
      if (errors[key] !== "") {
        swal({
          title: "Something is not right!",
          text: "You clicked the button!",
          icon: "warning",
          button: "OK!",
        });
        return;
      }
    }

    for (const key in values) {
      if (values.projectName == "" || values.category == "") {
        swal({
          title: "ProjectName and Category is required!",
          text: "You clicked the button!",
          icon: "warning",
          button: "OK!",
        });
      }
      return;
    }
    dispatch(CreateProjectAction(values));
  };

  return (
    <div className="creactProject">
      <p className="creactProject-title">
        <NavLink className="text-title" to="/getproject">
          Project
        </NavLink>
        /
        <NavLink className="text-title" to="/create">
          NewProject
        </NavLink>
      </p>
      <h2>New project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-inputProject">
          <label htmlFor="projectName">Project Name</label>
          <input
            onChange={handleChange}
            id="projectName"
            name="projectName"
            type="text"
          />
        </div>
        <p className="errors-Vali">{errors.projectName}</p>
        <div className="form-inputProject">
          <label htmlFor="projectName">Project category</label>
          <input
            onChange={handleChange}
            id="category"
            name="category"
            type="text"
          />
        </div>
        <p className="errors-Vali">{errors.category}</p>
        <div className="form-inputProject">
          <label htmlFor="description">Description</label>
          <textarea
            rows="6"
            cols="50"
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
          />
        </div>
        <button type="button" className="projectButton">
          Cancel
        </button>
        <button type="submit" className="projectButton1">
          Create
        </button>
      </form>
    </div>
  );
}

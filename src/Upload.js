import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [Values, setValues] = useState({
    topic_name: "",
    singlenote: "",
    token: "",
  });
  const handleChange = (props) => (event) => {
    setValues({ ...Values, [props]: event.target.value });
    console.log(Values);
  };

  const handleFileChange = (props) => (events) => {
    console.log(events.target.files[0]);
    setValues({ ...Values, [props]: events.target.files[0] });
    console.log(Values);
  };

  const handleSubmit = (events) => {
    events.preventDefault();
    const formData = new FormData();
    formData.append("enctype", "multipart/form-data");
    formData.append("topic_name", Values.topic_name);
    formData.append("singlenote", Values.singlenote);

    axios({
      // url is the server URL that will be used for the request
      url: "/api/notes/users-upload-single-notes",

      // method is the request method to be used when making the request
      method: "post",

      // baseURL will be prepended to url unless url is absolute.
      baseURL: "https://shattak.com",

      // headers are custom headers to be sent
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer" + " " + Values.token,
      },

      // data is the data to be sent as the request body
      data: formData,
    })
      .then((result) => {
        console.log(result);

        alert("Your Notes Is Succefull Uploaed");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);

        alert("Your Notes Is NOT Uploaed");

        // window.location.reload();
      });
  };

  return (
    <div>
      <h1>Fill the form regarding the notes upload</h1>

      <form onSubmit={handleSubmit}>
        Topic :{'\t'}
        <input
          type="text"
          name="topic_name"
          onChange={handleChange("topic_name")}
        />
       
        <br />
        <br />
        Token : {'\t'}
        <input type="text" name="token" onChange={handleChange("token")} />
        <br />
        <br />
        <input
          type="file"
          id="myFile"
          name="singlenote"
          onChange={handleFileChange("singlenote")}
        />{" "}
        <br />
        <br />
        <button type="submit"> Upload a file </button>
      </form>
    </div>
  );
}

export default Upload;

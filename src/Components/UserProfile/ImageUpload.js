import axios from "axios";
import React, { useEffect, useState } from "react";
import FormData from "form-data";

function handleClick() {
  var inp = document.querySelector("#imageInput");
  inp.click();
  var btn1 = document.querySelector(".modal-click");

  var btn2 = document.querySelector("#img-submit");
  console.log(btn1);
  console.log(btn2);

  btn1.style.visibility = "hidden";
  btn2.style.visibility = "visible";
}

function ImageUpload() {
  const [id, setId] = useState("");
  const [key, setKey] = useState("");
  const [img, setImg] = useState();

  const handleUpload = (e) => {
    e.preventDefault();

    var imageInput = document.getElementById("imageInput");
    const file = imageInput.files[0];
    console.log(file);

    var imageInput = new FormData();
    imageInput.append("image", file);

    axios
      .post("http://localhost:4000/image", imageInput)
      .then(
        (response) => {
          const key = response.data.imagePath.split("/")[2];
          const data = {
            key,
            id,
          };
          console.log(data);
          axios
            .post("http://localhost:4000/user-img", data)
            .then((res) => window.location.reload());
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(async () => {
    var token = localStorage.getItem("jwt");

    // var user = await User.findOne({ _id: userID });
    if (token) {
      var base64Payload = token.split(".")[1];
      var payload = Buffer.from(base64Payload, "base64");
      var userID = JSON.parse(payload.toString()).id;
      console.log(userID);
      setId(userID);
      //user = JSON.parse(user);
      //console.log(user);
      await axios
        .post("http://localhost:4000/get-user", {
          uid: `${userID}`,
        })
        .then(
          (response) => {
            console.log(response.data.imgKey);
            axios
              .get("http://localhost:4000/image/" + response.data.imgKey)
              .then((res) => console.log(res.data));

            setKey(response.data.imgKey);

            setImg("http://localhost:4000/image/" + response.data.imgKey);
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  console.log(img);
  useEffect(() => {
    var image = document.querySelector(".profile-image");
    image.src = img;
  }, [img]);
  return (
    <>
      <button type="button" class="modal-click" onClick={handleClick}>
        Select Profile Image
      </button>

      {/* <div className="image-upload"> */}
      <form id="imageForm">
        <input id="imageInput" type="file" accept="image/*" />
        <button id="img-submit" type="submit" onClick={handleUpload}>
          Upload
        </button>
      </form>
      {/* </div> */}
    </>
  );
}

export default ImageUpload;

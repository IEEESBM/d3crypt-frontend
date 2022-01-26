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
  const defaultImg = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
  const [id, setId] = useState("");
  const [key, setKey] = useState("");

  const [img, setImg] = useState(defaultImg);

  const handleUpload = async (e) => {
    e.preventDefault();

    console.log(key);
    if (img !== defaultImg) {
      await axios.post("http://localhost:4000/delete-image/" + key)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
    }

    var imageInput = document.getElementById("imageInput");
    const file = imageInput.files[0];
    console.log(file);

    if (!file) {
      alert("sorry you have not selected an image!");
      var btn1 = document.querySelector(".modal-click");
      var btn2 = document.querySelector("#img-submit");
      btn1.style.visibility = "visible";
      btn2.style.visibility = "hidden";
      return;
    }

    var imageInput = new FormData();
    imageInput.append("image", file);


    axios
      .post("http://localhost:4000/image", imageInput)
      .then(
        (response) => {
          const key = response.data;
          const data = {
            key
          };
          console.log(data);
          const jwt = JSON.parse(localStorage.getItem("jwt"));
          axios
            .post("http://localhost:4000/user-img", data, {headers: {
              'x-access-token': jwt
            }})
            .then((response) => {
              window.location.reload();
            });
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
      // var base64Payload = token.split(".")[1];
      // var payload = Buffer.from(base64Payload, "base64");
      // var userID = JSON.parse(payload.toString()).id;
      // console.log(userID);
      // setId(userID);
      //user = JSON.parse(user);
      //console.log(user);
      const jwt = JSON.parse(localStorage.getItem("jwt"));
      await axios
        .post("http://localhost:4000/get-user",{},{headers: {
          'x-access-token': jwt
        }})
        .then(
          (response) => {
            console.log(response.data.imgKey);
            if (response.data.imgKey) {
              setKey(response.data.imgKey);
              setImg("http://localhost:4000/image/" + response.data.imgKey);
            }
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
        <div className="overlay"></div>
      </button>

      <input id="imageInput" type="file" accept="image/*" />
      <button id="img-submit" type="submit" onClick={handleUpload}>
        Upload
        <div className="overlay"></div>
      </button>
    </>
  );
}

export default ImageUpload;

import axios from "axios";
import React, { useEffect, useState } from "react";
import FormData from "form-data";
import ConsoleHelper from "../consolelogger";



function ImageUpload() {
  const defaultImg =
    "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg";
  const [id, setId] = useState("");
  const [key, setKey] = useState("");
  const [visible, setVisible] = useState(false);
  const [img, setImg] = useState(defaultImg);
  function handleClick() {
    var inp = document.querySelector("#imageInput");
    inp.click();
    var btn1 = document.querySelector(".modal-click");
  
    var btn2 = document.querySelector("#img-submit");
    ConsoleHelper(btn1);
    ConsoleHelper(btn2);
  
    btn1.style.visibility = "hidden";
    btn2.style.visibility = "visible";
    setVisible(true)
  }
  const handleUpload = async (e) => {
    e.preventDefault();
    setVisible(false)
    ConsoleHelper(key);
    if (img !== defaultImg) {
      await axios
        .post("https://d3crypt-backend.herokuapp.com/delete-image/" + key)
        .then((res) => {
          ConsoleHelper(res);
        })
        .catch((error) => {
          ConsoleHelper(error);
        });
    }

    var imageInput = document.getElementById("imageInput");
    const file = imageInput.files[0];
    ConsoleHelper(file);

    if (!file) {
      alert("Sorry you have not selected an image!");
      var btn1 = document.querySelector(".modal-click");
      var btn2 = document.querySelector("#img-submit");
      btn1.style.visibility = "visible";
      btn2.style.visibility = "hidden";
      return;
    }

    var imageInput = new FormData();
    imageInput.append("image", file);

    axios
      .post("https://d3crypt-backend.herokuapp.com/image", imageInput)
      .then(
        (response) => {
          const key = response.data;
          const data = {
            key,
          };
          ConsoleHelper(data);
          const jwt = JSON.parse(localStorage.getItem("jwt"));
          axios
            .post("https://d3crypt-backend.herokuapp.com/user-img", data, {
              headers: {
                "x-access-token": jwt,
              },
            })
            .then((response) => {
              window.location.reload();
            });
        },
        (error) => {
          ConsoleHelper(error);
        }
      )
      .catch((error) => {
        ConsoleHelper(error);
      });
  };
  useEffect(async () => {
    var token = localStorage.getItem("jwt");

    if (token) {
      const jwt = JSON.parse(localStorage.getItem("jwt"));
      await axios
        .post(
          "https://d3crypt-backend.herokuapp.com/get-user",
          {},
          {
            headers: {
              "x-access-token": jwt,
            },
          }
        )
        .then(
          (response) => {
            ConsoleHelper(response.data.imgKey);
            if (response.data.imgKey) {
              setKey(response.data.imgKey);
              setImg(
                "https://d3crypt-backend.herokuapp.com/image/" +
                  response.data.imgKey
              );
            }
          },
          (error) => {
            ConsoleHelper(error);
          }
        )
        .catch((error) => {
          ConsoleHelper(error);
        });
    }
  }, []);

  ConsoleHelper(img);

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
      {visible && (
        <div className="aa">Click on Upload to update your profile picture</div>
      )}{" "}
      <input id="imageInput" type="file" accept="image/*" />
      <button id="img-submit" type="submit" onClick={handleUpload}>
        Upload
        <div className="overlay"></div>
      </button>
    </>
  );
}

export default ImageUpload;

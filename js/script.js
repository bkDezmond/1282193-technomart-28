var writeUsLink = document.querySelector(".write-us");
var writeUsPopup = document.querySelector(".write-us-popup");
if (writeUsPopup) {
  var writeUsClose = writeUsPopup.querySelector(".close-write-us");
  var writeForm = writeUsPopup.querySelector(".wrtie-us-form");
  var loginName = writeUsPopup.querySelector(".login-name");
  var liginMail = writeUsPopup.querySelector(".login-email");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  writeUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-show");
    if (storage) {
      loginName.value = storage;
      loginMail.focus();
    } else {
      loginName.focus();
    }
  });

  writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-show");
    writeUsPopup.classList.remove("modal-error");
  });

  writeForm.addEventListener("submit", function (evt) {
    if (!loginName.value || !loginMail.value) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-error");
      writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
      writeUsPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", loginName.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writeUsPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-show");
        writeUsPopup.classList.remove("modal-error");
      }
    }
  });
}

var mapLink = document.querySelector(".js-map");
if (mapLink) {
  var mapPopup = document.querySelector(".modal-map");
  var closeMap = mapPopup.querySelector(".close-popup-map");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

var buyLinks = [...document.querySelectorAll(".buy")];
var itemAdded = document.querySelector(".item-popup");
var closeItem = itemAdded.querySelector(".close-popup");
var continueClose = itemAdded.querySelector(".continue");

buyLinks.forEach((link) =>
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    itemAdded.classList.add("modal-show");
  })
);
closeItem.addEventListener("click", function (evt) {
  evt.preventDefault();
  itemAdded.classList.remove("modal-show");
});

continueClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  itemAdded.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (itemAdded.classList.contains("modal-show")) {
      evt.preventDefault();
      itemAdded.classList.remove("modal-show");
    }
  }
});

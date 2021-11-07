const { remote } = require("electron");
var win = remote.BrowserWindow.getFocusedWindow();
const ArmCord = require("./ArmCord.js");
const css = `
.titleebar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  width: 100%;
  font-size: 13px;
  padding: 0 16px;
  overflow: hidden;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  user-select: none;
  zoom: 1;
  line-height: 22px;
  height: 22px;
  display: flex;
  z-index: 99999;
}
.titlebar {
  display: block;
  top: 0;
  left: 0;
  right: 0;
  flex-shrink: 0;
  overflow: hidden;
  zoom: 1;
  box-sizing: border-box;
  width: 100%;
  clear:both;
  height: 30px;
  line-height: 30px;
  background-color: #202225;
  -webkit-app-region: drag;
  width: 100%;
  user-select: none;
  -webkit-user-select: none;
  position: fixed;
  z-index: 99999;
  
}
.appMount-3lHmkl{

}
.titlebar #window-title {
  width: 30%;
  height: 100%;
  line-height: 30px;
  float: left;
  padding: 0 0 0 1em;
}

.titlebar #window-controls-container {
  float: right;
  width: 150px;
  height: 100%;
  line-height: 30px;
  background-color: #202225;
  -webkit-app-region: no-drag;
}

.titlebar #window-controls-container #minimize,
.titlebar #window-controls-container #maximize,
.titlebar #window-controls-container #quit {
  float: left;
  height: 100%;
  width: 33%;
  text-align: center;
  color: #f7f7f7;
  cursor: default;
}

.titlebar #window-controls-container #minimize:hover {
  background-color: #99AAB5;
}
.titlebar #window-controls-container #maximize:hover {
  background-color: #99AAB5;
}
.titlebar #window-controls-container #quit:hover {
  background-color: #F04747;
}
.titlebar #window-controls-container #quit {
  background-color: #f7f7f7;
  -webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z' fill='%23000'/%3E%3C/svg%3E") no-repeat 50% 50%;
  mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z' fill='%23000'/%3E%3C/svg%3E") no-repeat 50% 50%;
}
.titlebar #window-controls-container #minimize {
  background-color: #f7f7f7;
  -webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 4.399V5.5H0V4.399h11z' fill='%23000'/%3E%3C/svg%3E") no-repeat 50% 50%;
  mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 4.399V5.5H0V4.399h11z' fill='%23000'/%3E%3C/svg%3E") no-repeat 50% 50%;
}
.titlebar #window-controls-container #maximize {
  background-color: #f7f7f7;
  -webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 0v11H0V0h11zM9.899 1.101H1.1V9.9h8.8V1.1z' fill='%23000'/%3E%3C/svg%3E") no-repeat 50% 50%;
  mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 0v11H0V0h11zM9.899 1.101H1.1V9.9h8.8V1.1z' fill='%23000'/%3E%3C/svg%3E") no-repeat 50% 50%;
}


`;
document.addEventListener("DOMContentLoaded", function (event) {
  var elem = document.createElement("div");
  elem.innerHTML = `<nav class="titlebar">
    <div class="window-title" id="window-title"></div>
    <div id="window-controls-container">
        <div id="minimize"></div>
        <div id="maximize"></div>
        <div id="quit"></div>
    </div>
  </nav>`;
  document.body.appendChild(elem);
  
  ArmCord.addStyle(css);

  var minimize = document.querySelector("#minimize");
  var maximize = document.querySelector("#maximize");
  var quit = document.querySelector("#quit");

  minimize.addEventListener("click", () => {
    win.minimize();
  });

  maximize.addEventListener("click", () => {
    if (win.isMaximized() == true) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });

  quit.addEventListener("click", () => {
    win.close();
  });
});
const EventEmitter = require("events");
const button = new EventEmitter();
// //event listner
button.on("click", () => {
    console.log("Button was clicked!");
});
button.on("click", () => {
    console.log("Click event handled.");
});
//trigger the event
button.emit("click");
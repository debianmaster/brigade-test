
const { events } = require("brigadier");
const k8s = require('@kubernetes/client-node');

events.on("resource_added", handle);     // New resource is created
events.on("resource_modified", handle);  // Existing resource is modified
events.on("resource_deleted", handle);   // Existing resource is deleted
events.on("resource_error", handle);     // Something weird happened, and we think you should know about it

function handle(e, p) {
    console.log("chak",k8s);
    let obj = JSON.parse(e.payload); // <-- your Kubernetes object
    console.log(obj);
}

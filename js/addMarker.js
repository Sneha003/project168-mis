AFRAME.registerComponent("addingmarkers", {
  init: async function () {
    var toys = await this.getToys();
    console.log(toys)

    var mainScene = document.querySelector("#main-scene");

    toys.map(toy => {
        var marker = document.createElement("a-marker");
        marker.setAttribute("id", toy.id);
        marker.setAttribute("type", "pattern");
        marker.setAttribute("url", toy.marker_pattern_url);
        marker.setAttribute("cursor", {
          rayOrigin: "mouse"
        });
        marker.setAttribute("createmarkers", {});
        mainScene.appendChild(marker);
        console.log(marker)
    })
  
  },



  getToys: async function () {
    return await firebase.firestore()
      .collection("toys")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => doc.data());
      });
  },
});

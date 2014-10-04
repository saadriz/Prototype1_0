(function(window, undefined) {
  var dictionary = {
    "c6eb9484-ca38-447a-94f8-6ffbd234aca2": "Agriculture List view",
    "831f4200-f3f0-4c40-a116-3fbf4c14144f": "Master Map view",
    "4bc8a90c-7376-46e1-8ecd-3b91df8e3434": "Poultry Map view",
    "8d17dc74-5fb2-422d-8a57-5c8ea8a052a6": "Poultry List view",
    "4190d8a8-cbef-4905-93e9-7a57d481607e": "District zoom view",
    "abbf570d-8795-46c6-ac05-58f32e93e24e": "Splash Page",
    "dec3f298-c9e1-4056-9f0a-2d7d92ad542e": "Economy Map view",
    "22264529-658a-4c64-a023-1447f1d32687": "Economy Master",
    "b1fdb4bd-7ff5-41b0-9ae8-f2b5bd394609": "Non-oil and gas",
    "437003a3-8e0f-4651-89da-bc1b46ee80ce": "Economy List view",
    "c2b0325a-173b-4ff9-8f8b-49b0ec6be9b7": "Agriculture Map view",
    "30425310-7554-404b-90a0-c57e45f5e647": "Agriculture",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Master page",
    "8023f643-0115-4900-bb8d-7e5fc01afe2f": "Master List view",
    "ed061210-2b17-4718-833e-ea067f64a65e": "Poultry Master",
    "ad63ef25-6ca8-4f66-afd0-d09d1206b6ab": "iPhone4"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
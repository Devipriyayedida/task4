// function which helps in display of drag&drop box when user clicked on "browse" button
// function browseFileHandler() {

//     document.getElementById("uploader").classList.add("show-uploader");
//   }
  var fileuploader = document.getElementById("fileuploader");
  var resume = document.getElementById('resume');
     var button = document.getElementById("browse");
       function browseFileHandler () {
            fileuploader.click();
        };
        fileuploader.onchange = function () {
            var fileName = fileuploader.value.split('\\')[fileuploader.value.split('\\').length - 1];
            document.getElementById('resume').innerHTML = fileName;
            console.log( document.getElementById('resume').innerHTML)
        };
//   // function to setup the filename to resume field
//   function fileUploadHandler(event) {
//     let file = event.target.files[0];
//     if (file != undefined) {
//   document.getElementById("resume").value = file.name;
//       document.getElementById("uploader").classList.remove("show-uploader");
//     }
//   }

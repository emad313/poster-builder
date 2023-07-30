


// Get All Ids
var headerInput = document.getElementById('header-input');
var headerView = document.getElementById('header-view');
var imageInput = document.getElementById('image-input');
var imageView = document.getElementById('image-view');
var descriptionInput = document.getElementById('description-input');
var descriptionView = document.getElementById('description-view');


var headingBtn = document.getElementById('heading-button');
var imageBtn = document.getElementById('image-button');
var descriptionBtn = document.getElementById('description-button');

var HeadingClose = document.getElementById('heading-close');
var ImageClose = document.getElementById('image-close');
var DescriptionClose = document.getElementById('description-close');

var headingComponent = document.getElementById('heading-component');
var imageComponent = document.getElementById('image-component');
var descriptionComponent = document.getElementById('description-component');

var downloadBtn = document.getElementById('download');

var alignButtonsGroup = document.getElementById('button-align-group');
var colorButtonsGroup = document.getElementById('button-color-group');


// Heading Show Toggle
headingBtn.addEventListener("click", (event) => {
    headingToggle();
});

// Heading Close Toggle
HeadingClose.addEventListener("click", (event) => {
    headingToggle();
});

// Heading Toggle Function
function headingToggle() {
    headingComponent.classList.toggle("hidden");
    headingBtn.classList.toggle("hidden");
    headerInput.value = "";
    headerView.innerHTML = "";
}

// Image Show Toggle
imageBtn.addEventListener("click", (event) => {
    imageToggle();
});

// Image Close Toggle
ImageClose.addEventListener("click", (event) => {
    imageToggle();
});

// Image Toggle Function
function imageToggle() {
    imageComponent.classList.toggle("hidden");
    imageBtn.classList.toggle("hidden");
    imageInput.value = "";
    imageView.src = "";
}

// Description Show Toggle
descriptionBtn.addEventListener("click", (event) => {
    descriptionToggle();
});

// Description Close Toggle
DescriptionClose.addEventListener("click", (event) => {
    descriptionToggle();
});

// Description Toggle Function
function descriptionToggle() {
    descriptionComponent.classList.toggle("hidden");
    descriptionBtn.classList.toggle("hidden");
    descriptionInput.value = "";
    descriptionView.innerHTML = "";
}

// Align Buttons Group  alignment Toggle
alignButtonsGroup.addEventListener("click", (event) => {
    
    if(event.target.id == "text-left") {
        // headerView.style.textAlign = "left";

        headerView.classList.remove("text-center");
        headerView.classList.remove("text-right");
        headerView.classList.add("text-left");
    }
    else if(event.target.id == "text-center") {
        // headerView.style.textAlign = "center";

        headerView.classList.remove("text-left");
        headerView.classList.remove("text-right");
        headerView.classList.add("text-center");
    }
    else if(event.target.id == "text-right") {
        // headerView.style.textAlign = "right";

        headerView.classList.remove("text-left");
        headerView.classList.remove("text-center");
        headerView.classList.add("text-right");
    }
});

// Color Buttons Group  color Toggle
colorButtonsGroup.addEventListener("click", (event) => {
    
    if(event.target.id == "text-blue-700") {
        // headerView.style.color = "blue";

        headerView.classList.remove("text-black");
        headerView.classList.remove("text-green-700");
        headerView.classList.add("text-blue-700");
    }
    else if(event.target.id == "text-black") {
        // headerView.style.color = "black";

        headerView.classList.remove("text-blue-700");
        headerView.classList.remove("text-green-700");
        headerView.classList.add("text-black");
    }
    else if(event.target.id == "text-green-700") {
        // headerView.style.color = "green";

        headerView.classList.remove("text-blue-700");
        headerView.classList.remove("text-black");
        headerView.classList.add("text-green-700");
    }
});

// Header Input Event
headerInput.addEventListener("input", (event) => {
    headerView.innerHTML = event.target.value;
  });

// Image Input Event
imageInput.onchange = e => {
    const [file] = imageInput.files
    if (file) {
        imageView.src = URL.createObjectURL(file);
        imageView.classList.remove("hidden");
    }
  }

// Description Input Event
descriptionInput.addEventListener("input", (event) => {
    descriptionView.innerHTML = event.target.value;
});


// Download Image by html2canvas Library
downloadBtn.addEventListener("click", (event) => {
    html2canvas(
        document.getElementById('poster'),
        {
            allowTaint: true,
            useCORS: true
        }
    ).then(canvas => {
        download(canvas)
    })
  });

// Download Function
const download = function (canvas) {
    const link = document.createElement('a');
    link.download = 'poster.png';
    link.href = canvas.toDataURL()
    link.click();
}
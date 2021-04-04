// clear anchor's
$("a.prevent").click(function (event) {
  event.preventDefault();
  $("<div>")
    .append("default " + event.type + " prevented")
    .appendTo("#log");
});

// this is a Bouncy

const button = document.querySelector(".click");
button.addEventListener("click", function () {
  document.querySelector(".tibWrapper").classList.toggle("clear");
  button.classList.toggle("rotate");
});
//
const hartIco = document.querySelector(
  "div.detailsTitle >div a:nth-of-type(1)"
);
const mouseIco = document.querySelector(
  "div.detailsTitle >div a:nth-of-type(2)"
);
const lightIco = document.querySelector(
  "div.detailsTitle >div a:nth-of-type(3)"
);
const designSpanIco = document.querySelector(
  ".projects>div:nth-of-type(1)>span"
);
const vintageSpanIco = document.querySelector(
  ".projects>div:nth-of-type(2)>span"
);
const brandingSpanIco = document.querySelector(
  ".projects>div:nth-of-type(3)>span"
);
const settingsIco = document.querySelector("div.icons>a:nth-of-type(1)");
const designIco = document.querySelector("div.icons>a:nth-of-type(2)");
const rolleIco = document.querySelector("div.icons>a:nth-of-type(3)");
const attachmentIco = document.querySelector("div.icons>a:nth-of-type(4)");

const hart = document.querySelector(".hart");
const mouse = document.querySelector(".mouse");
const light = document.querySelector(".light");
const settings = document.querySelector(".linkFirst:nth-of-type(1)");
const design = document.querySelector(".linkFirst:nth-of-type(2)");
const rolle = document.querySelector(".linkFirst:nth-of-type(3)");
const attachment = document.querySelector(".linkFirst:nth-of-type(4)");
const circleSettings = document.querySelector(".first");

const icons = [
  hartIco,
  mouseIco,
  lightIco,
  designSpanIco,
  vintageSpanIco,
  brandingSpanIco,
  settingsIco,
  designIco,
  rolleIco,
  attachmentIco,
];
const blocks = [
  mouse,
  light,
  settings,
  design,
  rolle,
  attachment,
  circleSettings,
];

const linkList = [...document.querySelectorAll(".icons>a")];
let brandingValue1 = document.querySelector(".number> h2.brandingPercent");
let webValue1 = document.querySelector("h2.webDesignPercent");
let uiValue1 = document.querySelector("h2.UIPercent");

const percentServices = [
  {
    name: "sysSetings",
    brandingValue: 75,
    webValue: 60,
    uiValue: 75,
  },
  {
    name: "graphicDes",
    brandingValue: 95,
    webValue: 80,
    uiValue: 90,
  },
  {
    name: "rollePlaying",
    brandingValue: 80,
    webValue: 75,
    uiValue: 90,
  },
  {
    name: "attachDes",
    brandingValue: 90,
    webValue: 85,
    uiValue: 80,
  },
];

let newActive = 0;

let countingBranding = 0;
let countingWeb = 0;
let countingUI = 0;
let index = 0;
let timeOutId;

const setPercents = (newActive) => {
  countingBranding = 0;
  countingWeb = 0;
  countingUI = 0;
  brandingValue1.textContent = percentServices[newActive].brandingValue + "%";
  webValue1.textContent = percentServices[newActive].webValue + "%";
  uiValue1.textContent = percentServices[newActive].uiValue + "%";
};

const animatePercent = () => {
  if (countingBranding <= percentServices[index].brandingValue) {
    brandingValue1.textContent = countingBranding++ + "%";
  }
  if (countingWeb <= percentServices[index].webValue) {
    webValue1.textContent = countingWeb++ + "%";
  }
  if (countingUI <= percentServices[index].uiValue) {
    uiValue1.textContent = countingUI++ + "%";
  }
  timeOutId = setTimeout(animatePercent, 30);
};

const circleBar = [...document.querySelectorAll("circle.second")];
const strokeDasharray = document
  .querySelector("circle.second")
  .getAttribute("stroke-dasharray");

let percentNumber = 0;
let percentBorder = 0;
let timerIdCircleBar = 0;
const animateCircleBar = () => {
  percentNumber++;
  if (
    percentNumber <=
    strokeDasharray * (percentServices[index].brandingValue / 100)
  ) {
    circleBar[0].setAttribute("stroke-dashoffset", percentNumber);
  }
  if (
    percentNumber <=
    strokeDasharray * (percentServices[index].webValue / 100)
  ) {
    circleBar[1].setAttribute("stroke-dashoffset", percentNumber);
  }
  if (
    percentNumber <=
    strokeDasharray * (percentServices[index].uiValue / 100)
  ) {
    circleBar[2].setAttribute("stroke-dashoffset", percentNumber);
  }
  return (timerIdCircleBar = setTimeout(animateCircleBar, 5));
};

linkList.forEach((btn) =>
  btn.addEventListener("click", () => {
    clearTimeout(timeOutId);
    index = linkList.indexOf(btn);
    setPercents(index);
    animatePercent();
    clearTimeout(timerIdCircleBar);
    animateCircleBar();
    percentNumber = 0;
    return index;
  })
);

for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    if (this == hartIco) {
      hart.classList.remove("clear");
      mouse.classList.add("clear");
      light.classList.add("clear");
    } else if (this == mouseIco) {
      mouse.classList.remove("clear");
      hart.classList.add("clear");
      light.classList.add("clear");
    } else if (this == lightIco) {
      mouse.classList.add("clear");
      hart.classList.add("clear");
      light.classList.remove("clear");
    } else if (this == settingsIco) {
      settings.classList.remove("clear");
      design.classList.add("clear");
      rolle.classList.add("clear");
      attachment.classList.add("clear");
      circleSettings.classList.remove("clear");
    } else if (this == designIco) {
      settings.classList.add("clear");
      design.classList.remove("clear");
      rolle.classList.add("clear");
      attachment.classList.add("clear");
    } else if (this == rolleIco) {
      settings.classList.add("clear");
      design.classList.add("clear");
      rolle.classList.remove("clear");
      attachment.classList.add("clear");
    } else if (this == attachmentIco) {
      settings.classList.add("clear");
      design.classList.add("clear");
      rolle.classList.add("clear");
      attachment.classList.remove("clear");
    } else if (this == designSpanIco) {
      vintageSpanIco.classList.remove("clear");
      brandingSpanIco.classList.remove("clear");
      designSpanIco.classList.toggle("clear");
      document
        .querySelector(".projects>div:nth-of-type(1)")
        .classList.toggle("growsX");
    } else if (this == vintageSpanIco) {
      vintageSpanIco.classList.toggle("clear");
      brandingSpanIco.classList.remove("clear");
      designSpanIco.classList.remove("clear");
      document
        .querySelector(".projects>div:nth-of-type(2)")
        .classList.toggle("growsX");
    } else if (this == brandingSpanIco) {
      vintageSpanIco.classList.remove("clear");
      brandingSpanIco.classList.toggle("clear");
      designSpanIco.classList.remove("clear");
      document
        .querySelector(".projects>div:nth-of-type(3)")
        .classList.toggle("growsX");
    }
  });
}

// Появление элементов при скролирыванию
const sliderList = document.querySelectorAll("section");
const sliderListArr = Array.prototype.slice.call(sliderList);
window.addEventListener("scroll", function () {
  let coords = Math.floor(window.pageYOffset);
  for (let i = 0; i < sliderListArr.length; i++) {
    if (coords >= sliderListArr[i].offsetTop - 400) {
      sliderListArr[i].classList.add("visible");
    } else sliderListArr[i].classList.remove("visible");
  }
});

const sectionServices = document.querySelector("section.services");
const animeItemsNodeList = document.querySelectorAll("circle:nth-child(2)");
const animeItemsArr = Array.prototype.slice.call(animeItemsNodeList);
sectionServices.addEventListener("transitionend", function () {
  for (let i = 0; i < animeItemsArr.length; i++) {
    if (animeItemsArr[i].classList.contains("anime")) {
      animeItemsArr[i].classList.remove("anime");
    } else animeItemsArr[i].classList.add("anime");
  }
});

// pobieranie gallery
const galleryImgs = document.querySelectorAll(".gallery>div");
galleryImgs.forEach((divImg) => {
  let div = document.createElement("div");
  div.style.display = "none";
  let p = document.createElement("p");
  let h2 = document.createElement("h2");
  div.appendChild(h2);
  div.appendChild(p);
  divImg.appendChild(div);
  let flag = true;
  divImg.addEventListener("click", (e) => {
    if (flag) {
      const title = e.target.getAttribute("title");
      const alt = e.target.getAttribute("alt");
      p.textContent = alt;
      h2.textContent = title;
      div.style.display = "block";
      flag = false;
    } else {
      div.style.display = "none";
      flag = true;
    }

    if (flag == false) return;
  });
});
//-------------------

//----- TeamSlider------

const teamObject = [
  {
    img: "img/team1.png",
    name: "Abdullah Noman",
    position: "Creative Director code Cafe",
    brandingPercent: 90,
    webDesignPercent: 85,
    UIPercent: 75,
  },
  {
    img: "img/team2.png",
    name: "Rahim Kutrapalli",
    position: "Manager code Cafe",
    brandingPercent: 85,
    webDesignPercent: 80,
    UIPercent: 95,
  },
  {
    img: "img/team3.png",
    name: "Mahmud Jonhatan",
    position: "Creative Artist code Cafe",
    brandingPercent: 80,
    webDesignPercent: 75,
    UIPercent: 85,
  },
];

const teamImg = document.querySelector(".employer img");
const h3Name = document.querySelector("h3.name");
const position = document.querySelector("p.position");
const brandingPercent = document.querySelector("span.brandingPercent");
const webDesignPercent = document.querySelector("span.webDesignPercent");
const UIPercent = document.querySelector("span.UIPercent");

const dots = [...document.querySelectorAll(".link a")];

const progBar1 = document.querySelector("svg.progBar1 rect:nth-of-type(2)");
const progBar2 = document.querySelector("svg.progBar2 rect:nth-of-type(2)");
const progBar3 = document.querySelector("svg.progBar3 rect:nth-of-type(2)");

let brandingPercentWidth = 0;
let webDesignPercentrWidth = 0;
let UIPercentWidth = 0;

const time = 8000;
let active = 0;
let countDot = 0;
let animateProgBarTimeID = 0;

const animateProgBar = () => {
  if (brandingPercentWidth < teamObject[active].brandingPercent) {
    brandingPercentWidth++;
    progBar1.style.width = brandingPercentWidth + "%";
  }
  if (webDesignPercentrWidth < teamObject[active].webDesignPercent) {
    webDesignPercentrWidth++;
    progBar2.style.width = webDesignPercentrWidth + "%";
  }
  if (UIPercentWidth < teamObject[active].UIPercent) {
    UIPercentWidth++;
    progBar3.style.width = UIPercentWidth + "%";
  }
};

const changeProgBar = () => {
  brandingPercentWidth = 0;
  webDesignPercentrWidth = 0;
  UIPercentWidth = 0;
  animateProgBarTimeID = setInterval(animateProgBar, 24);
};

const changeDots = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeTeamSlide = () => {
  clearInterval(animateProgBarTimeID);
  active++;
  if (active === teamObject.length) {
    active = 0;
  }
  teamImg.src = teamObject[active].img;
  h3Name.textContent = teamObject[active].name;
  position.textContent = teamObject[active].position;
  brandingPercent.textContent = teamObject[active].brandingPercent + "%";
  webDesignPercent.textContent = teamObject[active].webDesignPercent + "%";
  UIPercent.textContent = teamObject[active].UIPercent + "%";
  changeDots();
  changeProgBar();
};

let timeId = setInterval(changeTeamSlide, time);

const clickChange = (e) => {
  clearInterval(animateProgBarTimeID);
  clearInterval(timeId);
  let clickDot = e.target;
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  clickDot.classList.add("active");
  const currentDot = dots.findIndex((dot) => dot.classList.contains("active"));
  active = currentDot;
  if (currentDot >= 0) {
    teamImg.src = teamObject[currentDot].img;
    h3Name.textContent = teamObject[currentDot].name;
    position.textContent = teamObject[currentDot].position;
    brandingPercent.textContent = teamObject[currentDot].brandingPercent + "%";
    webDesignPercent.textContent =
      teamObject[currentDot].webDesignPercent + "%";
    UIPercent.textContent = teamObject[currentDot].UIPercent + "%";
  }
  changeProgBar();
  timeId = setInterval(changeTeamSlide, time);
};

dots.forEach((dot) => dot.addEventListener("click", clickChange));

//----- TeamSlider end------

//----- Testimonials slider------
const divTestimonials = document.querySelectorAll(".testimonial");
const testimonialLink = document.querySelectorAll(".testimonialLink>a");

testimonialLink.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    for (let i = 0; i < divTestimonials.length; i++) {
      divTestimonials[i].style.display = "none";
      testimonialLink[i].style.backgroundColor = "transparent";
    }
    divTestimonials[index].style.display = "flex";
    dot.style.backgroundColor = "#19bd9a";
  });
});
//----- LATEST NEWS slider------
const newsLinkFirst = document.querySelector(".sliderLink>a:nth-of-type(1)");
const newsLinkLast = document.querySelector(".sliderLink>a:nth-of-type(3)");
const newsContent = document.querySelectorAll(".newsContent");
let num = 0;

newsLinkFirst.addEventListener("click", () => {
  num = num - 280;
  newsContent.forEach((content) => {
    content.style.transform = `translateY(${num}px)`;
  });
});
newsLinkLast.addEventListener("click", () => {
  num = num + 280;
  newsContent.forEach((content) => {
    content.style.transform = `translateY(${num}px)`;
  });
});

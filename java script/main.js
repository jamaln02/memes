const myBtn = document.querySelector("button");
const myInp = document.querySelector("input");
const myDiv = document.querySelector(".showMyMeme");

async function myData() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data = await res.json();
  return data;
}

myBtn.addEventListener("click", async () => {
  let memesData = await myData();
  memesData.data.memes.filter((ele, index) => {
    if (myInp.value == index) {
      myDiv.innerHTML = `
      <h1>${ele.name}</h1>
      <img class="w-50 h-50" src=${ele.url}>
      `;
    } else if (isNaN(myInp.value) || myInp.value == "") {
      myDiv.innerHTML = `
      <h1>please inter vaild number</h1>`;
    } else if (myInp.value > 99) {
      myDiv.innerHTML = ` <h1>invaild number</h1>`;
    }
  });
});

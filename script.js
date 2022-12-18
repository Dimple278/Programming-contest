let url = "https://kontests.net/api/v1/all"
let response = fetch(url)

function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}
const img_urls = ["https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=", "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1671339737~exp=1671340337~hmac=546bd4f5ebcb27b5e5ea31f7348daf65f0745a32ecb349491809e81aed69e890", "https://source.unsplash.com/200x150/?coding", "https://source.unsplash.com/200x150/?coding", "https://source.unsplash.com/200x150/?", "https://source.unsplash.com/200x150/?laptop", "https://source.unsplash.com/200x150/?code", "https://source.unsplash.com/200x150/?CPU", "https://source.unsplash.com/200x150/?hacking", "https://source.unsplash.com/200x150/?coding,computer", "https://source.unsplash.com/200x150/?red laptop", "https://source.unsplash.com/200x150/?coding contest", "https://source.unsplash.com/200x150/?black laptop", "https://source.unsplash.com/200x150/?keyboard", "https://source.unsplash.com/200x150/?white keyboard", "https://source.unsplash.com/200x150/?eat sleep code repeat", "https://source.unsplash.com/200x150/?laptop,coding quotes", "https://source.unsplash.com/200x150/?computer lab", "https://source.unsplash.com/200x150/?red CPU", "https://source.unsplash.com/200x150/?Robot", "https://source.unsplash.com/200x150/?AI", "https://source.unsplash.com/200x150/?Coding tshirts", "https://media.istockphoto.com/id/1143736474/photo/dark-web-hooded-hacker.jpg?b=1&s=170667a&w=0&k=20&c=HxuZ18KLim_SMYUMBQqIDvl73ASTKlCdp_nDwIZA0Io=", "https://media.istockphoto.com/id/1348369671/photo/business-man-using-computer-hand-close-up-futuristic-cyber-space-and-decentralized-finance.jpg?b=1&s=170667a&w=0&k=20&c=hW7rvnH6fyD-Zy5Oc9-r46Kt4Nt4PzEWPA_ts0lIQ3Y=", "https://cdn5.vectorstock.com/i/1000x1000/84/94/cartoon-coder-young-man-vector-31688494.jpg"];

response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    console.log(contests[item]);
    ihtml = ihtml + `<div class="card mx-2 my-2 " style="width: 21rem;">
                    <img src ="${getRandomItem(img_urls)}" width="200" 
     height="200"  class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title color=red">${contests[item].name}</h5>
                      <p class="card-text">Starts at: ${contests[item].start_time}</p>
                      <p class="card-text">Ends at: ${contests[item].end_time}</p>
                      <p class="card-text">In 24 Hours?: ${contests[item].in_24_hours}</p>
                      <p class="card-text">Status: ${contests[item].status}</p>
                      <p class="card-text"><b>Site: ${contests[item].site}</b></p>
                      <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
                    </div>
                    </div>`
    console.log(getRandomItem(img_urls));
  }
  cardContainer.innerHTML = ihtml
})
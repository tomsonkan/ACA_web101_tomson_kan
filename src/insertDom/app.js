const projectsList = [
  {
    name: 'Responsive Landing Page',
    desc: 'a lil description of something now here.',
    url: '../austin.jpg',
    tags: '#css, #html, #bootstrap',
    link: "../responsive-landing-page/responsive-landing-page.html"

  },
  {
    name: 'Coupon',
    desc: 'a lil description of something now here.',
    url: '../coupons/bjs.png',
    tags: '#css, #html, #bootstrap',
    link: "../coupons/coupons.html"
  },
  {
    name: 'Hair Salon',
    desc: 'a lil description of something now here.',
    url: '../hair/haircut3.jpg',
    tags: '#css, #html, #bootstrap',
    link: "../hair/hair.html"
  },
  {
    name: 'Checkpoint1',
    desc: 'a lil description of something now here.',
    url: 'https://picsum.photos/200?random=5',
    tags: '#css, #html, #bootstrap',
    link: "../projects/checkPoint-1-Dashboard.html"
  },
  {
    name: 'Transition Squares',
    desc: 'a lil description of something now here.',
    url: '../cool-background.png',
    tags: '#css, #html, #bootstrap',
    link: "../squares/moving-squares.html"
  },
  {
    name: 'Towers Of Hanoi',
    desc: 'a lil description of something now here.',
    url: '../projects/images/Towers of Hanoi.png',
    tags: '#css, #html, #bootstrap',
    link: "../Tower.html"
  },
  {
    name: 'Checkpoint2',
    desc: 'a lil description of something now here.',
    url: '../../codingpic.jpg',
    tags: '#css, #html, #bootstrap',
    link: "../projects/checkpoint-2-BaconIpsum.html"
  },
  {
    name: 'Checkpoint3',
    desc: 'a lil description of something now here.',
    url: '../projects/images/connect4.jpg',
    tags: '#css, #html, #bootstrap',
    link: "../checkpoint3-dashboard/checkpoint3-dashboard.html"
  },
]

let rowDiv = document.querySelector('.row')
console.log('rowDiv marker', rowDiv)

projectsList.forEach(project => {
  console.log('project',project)
  let cardTemplate = `<div class="card" style="width: 20rem;">
  <img class="card-img-top" src="${ project.url }" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${ project.name }</h5>
    <p class="card-text">${ project.desc }</p>
    <a href="${ project.link }" class="btn btn-primary">View online</a>
  </div>
</div>`
  rowDiv.insertAdjacentHTML('beforeend', cardTemplate)
});

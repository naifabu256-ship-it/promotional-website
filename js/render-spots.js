// Render spots data (embedded) into #spots-grid so the page works without a server
function renderSpots(){
  const spots = [
    { id:1, title:'Peace Memorial Park', image:'assets/images/peace-memorial-park.jpg', summary:'A reflective park at the edge of Ground Zero featuring a memorial, museum buildings, and the remnant minaret of the Bato Mosque.' },
    { id:2, title:'Aga Khan Museum', image:'assets/images/aga-khan-museum.jpg', summary:'University museum in MSU showcasing Meranaw and Islamic art, textiles, and cultural artifacts.' },
    { id:3, title:'Lake Lanao', image:'assets/images/lake-lanao.jpg', summary:"A vast, ancient lake known for scenic viewpoints and the 'Sleeping Beauty' silhouette." },
    { id:4, title:'Mindanao State University (MSU)', image:'assets/images/msu.jpg', summary:'Main campus with lush grounds and panoramic views of Lake Lanao.' },
    { id:5, title:'Sarimanok Sports Stadium', image:'assets/images/sarimanok-stadium.jpg', summary:'Scenic lakeside sports complex with multiple facilities and a convention center.' },
    { id:6, title:'Mount Mupo', image:'assets/images/mount-mupo.jpg', summary:'A low mountain inside the Sacred Mountain National Park ideal for birdwatching and trekking.' },
    { id:7, title:'Ground Zero', image:'assets/images/ground-zero.jpg', summary:'The former siege center that still bears battle scars; an important historical site.' },
    { id:8, title:'Marawi Grand Mosque', image:'assets/images/marawi-grand-mosque.jpg', summary:'The rebuilt grand mosque and a major architectural and spiritual landmark.' },
    { id:9, title:'Dayawan Torogan', image:'assets/images/dayawan-torogan.jpg', summary:'Traditional Maranao noble house with distinctive carvings; currently fragile but preserved.' },
    { id:10, title:'Heaven Road', image:'assets/images/heaven-road.jpg', summary:'An elevated cafe strip with viewdecks offering misty, panoramic vistas.' }
  ];

  const grid = document.getElementById('spots-grid');
  if(!grid) return;
  spots.forEach(s =>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `\
      <img src="${s.image}" alt="${s.title}">\
      <h3>${s.title}</h3>\
      <p>${s.summary}</p>`;
    grid.appendChild(card);
  });
}

// Render immediately
renderSpots();

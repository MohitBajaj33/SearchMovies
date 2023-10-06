const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const value = document.querySelector("input").value;
  const mainDiv = document.querySelector(".contan_movie");


   


  const url =
    `https://online-movie-database.p.rapidapi.com/auto-complete?q=${value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc28c9d449mshf55de20098e3570p1e7e97jsncdf28147a381",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        const n=(data.d.length) -1;
        setTimeout(()=>{
            for(let k=0;k<n;k++){
                const createNewDiv = document.createElement('div');
                const image = document.createElement('img');
                createNewDiv.appendChild(image);
                const newDiv= mainDiv.appendChild(createNewDiv).classList.add("movie1");
                image.src=data.d[k].i.imageUrl;
                console.log(n);
            }
        },2000);

      
    });

    
});

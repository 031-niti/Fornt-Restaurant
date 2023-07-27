const onLoad = async() => {
    
    const RestaurantById = await fetch("http://localhost:5000/restaurant/", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response)=>{
        return response.json();
      });
      console.log(RestaurantById);
};

const main = () =>{
    onLoad();
}

main();
const init = async () => {
    //ดึง id || query string มา จาก URL
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    if (id) {
        try {
            const restaurant = await fetch("http://localhost:5000/restaurant/" + id,
                {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            ).then((response) => {
                return response.json();
            });

            //set ค่าสำหรับ ที่จะแก้
            document.getElementById("id").value = restaurant.id;
            document.getElementById("name").value = restaurant.name;
            document.getElementById("type").value = restaurant.type;
            document.getElementById("imageURL").value = restaurant.imageURL;

             //ลองเอารูปอกมา
            // const item = document.createElement("img");
            // item.className = "imageurl";
            // item.src = user.imageurl;
            
        } catch (error) {
            alert(`ไม่พบร้านอาหาร ขอรับนายน้อย`)
        }
    } else {
        // alert(`Restaurant ID is missing`);
    }
};

const editRestaurant = async () => {
   const id = document.getElementById("id").value;
    if (id) {
        const params = {
            //id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            type: document.getElementById("type").value,
            imageURL: document.getElementById("imageURL").value,
        };
        const restaurant = await fetch("http://localhost:5000/restaurant/" + id,
            {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            }
        ).then((response) => {
            return response.json();
        }).then((restaurant) => {
            alert(`อาหาร:${id}เพิ่มให้แล้ว ขอรับนายน้อย!`);
            location.replace("index.html");
        });
    }
    else {
        //alert(`edit faill`);
    }
}

init();
editRestaurant();
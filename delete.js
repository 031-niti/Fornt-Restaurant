const deleteResto = async (id) => {
    try {
        const deleteRestaurant = await fetch("http://localhost:5000/restaurant/"+restaurant.id , { // ใช้ id ที่ถูกส่งมาแทนที่ restaurant.id
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },

        }).then((response) => {
            return response.json();
        }).then((restaurant) => { 
            alert("Restaurant ID : "+restaurant.id+ " is deleted")// ใช้ id ที่ถูกส่งมาแทนที่ restaurant.id
            location.reload();
        });
    }catch (error) {
        alert("Restaurant ID is missing")
    } 
}
const removeAllResult = () => {
    const restaurantsElement = document.querySelector("#restaurants");
    restaurantsElement.innerHTML = "";
}
const main = () => {
    deleteResto(); // ส่ง id ของร้านอาหารไปยังฟังก์ชัน deleteResto
    removeAllResult();
}
main();

async function getResponce() {
    let responce =[
  {
    "id": "1",
    "title": "Товар 1",
    "vendor_code": "111",
    "description": "Описание 1",
    "price": 100,
    "img": "../../images/uso_001.jpg"
  },
  {
    "id": "2",
    "title": "Товар 2",
    "vendor_code": "222",
    "description": "Описание 2",
    "price": 200,
    "img": "../../images/uso_002.jpg"
  },
  {
    "id": "3",
    "title": "Товар 3",
    "vendor_code": "333",
    "description": "Описание 3",
    "price": 300,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/uso_003.jpg"
  },
  {
    "id": "4",
    "title": "Товар 4",
    "vendor_code": "444e",
    "description": "Описание 4",
    "price": 400,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/uso_004.jpg"
  }
  ,
  {
    "id": "5",
    "title": "Товар 5",
    "vendor_code": "4445e",
    "description": "Описание 6",
    "price": 400,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/uso_005.jpg"
  },
  {
    "id": "6",
    "title": "Товар 6",
    "vendor_code": "4446e",
    "description": "Описание 6",
    "price": 400,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/1_1.png"
  },
  {
    "id": "7",
    "title": "Товар 7",
    "vendor_code": "4447e",
    "description": "Описание 7",
    "price": 700,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/1_2.png"
  },
  {
    "id": "8",
    "title": "Товар 8",
    "vendor_code": "4448e",
    "description": "Описание 8",
    "price": 800,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/1_3.png"
  },
  {
    "id": "9",
    "title": "Товар 9",
    "vendor_code": "444e",
    "description": "Описание 9",
    "price": 400,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/1_4.png"
  }
  ,
  {
    "id": "10",
    "title": "Товар 10",
    "vendor_code": "44410e",
    "description": "Описание 10",
    "price": 900,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/1_5.png"
  },
  {
    "id": "11",
    "title": "Товар 11",
    "vendor_code": "44411e",
    "description": "Описание 1",
    "price": 1100,
    "img": "https://raw.githubusercontent.com/vmarshirov/g06u28/main/images/1_6.png"
  }
]
    console.log("responce:\n", responce, "\n /responce: \n")
    let content = await responce.text()
    console.log("await responce.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 9)
    console.log("content.slice(0, 9)", content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title">${content[key].title}</h5>
        <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
                `
    }
}
getResponce()

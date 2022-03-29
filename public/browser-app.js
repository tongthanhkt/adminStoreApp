const productsDOM = document.querySelector(".products");
// const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".product-form");
const productIdDOM = document.querySelector(".product-id");
const productNameDOM = document.querySelector(".product-name");
const productPriceDOM = document.querySelector(".product-price");
const showProducts = async () => {
  try {
    const {
      data: { products },
    } = await axios.get("api/v1/products");
    console.log(products);

    const allProducts = products
      .map((product) => {
        const { _id, nameProduct, priceProduct } = product;
        return `<div class="single-product">
          <h5><span><i class="far fa-check-circle"></i></span>${_id}</h5>
            <h5><span><i class="far fa-check-circle"></i></span>${nameProduct}</h5>
            <h5><span><i class="far fa-check-circle"></i></span>${priceProduct}</h5>
            <div class="product-links">
                <a href="product.html?id=${_id}" class="edit-link">
                <i class ="fas fa-edit"></i>
                </a>
                <button type="button" class="delete-btn" data-id="${_id}">
                <i class="fas fa-trash"></i>
                </button>    
            </div>
            </div>`;
      })
      .join("");
    productsDOM.innerHTML = allProducts;
  } catch (error) {
    console.log(error);
  }
};
showProducts();
// tasksDOM.addEventListener("click", async (e) => {
//   const el = e.target;
//   if (el.parentElement.classList.contains("delete-btn")) {
//     const id = el.parentElement.dataset.id;
//     console.log(id);
//     try {
//       await axios.delete(`api/v1/tasks/${id}`);
//       showTasks();
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });
formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const productName = productNameDOM.value;
  const productPrice = productPriceDOM.value;
  console.log(productName);
  console.log(productPrice);
  await axios
    .post("api/v1/products", {
      nameProduct: productName,
      priceProduct: productPrice,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((eror) => {
      console.log(error);
    });

  showTasks();
});

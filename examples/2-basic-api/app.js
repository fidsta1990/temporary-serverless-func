const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/api/2-basic-api");

    const products = data
      .map((product) => {
        const {
          image: { url },
          name,
          price,
        } = product;
        return `<article class="product">
      <img src="${url}" alt="${name}"/>
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>
      `;
      })
      .join(" ");
    result.innerHTML = products;
    // result.innerHTML = `<h2>Success</h2>`;
  } catch (error) {
    result.innerHTML = `<h4>There was an error...Please try again later!</h4>`;
  }
};

fetchData();

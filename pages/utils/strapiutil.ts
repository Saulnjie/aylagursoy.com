export default function findStrapiElementById(products, id) {
  console.log(products)
  return products.find((element) => {
    return element.id === id;
  })
}

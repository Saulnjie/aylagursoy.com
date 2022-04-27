export default function findStrapiElementById(products: any, id: number) {
  console.log(products)
  return products.find((element: any) => {
    return element.id === id;
  })
}

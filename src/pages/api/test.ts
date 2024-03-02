import type { APIRoute } from "astro"; 

const Products = [
  {id : "1", name : "Product 1", price : 24},
  {id : "2", name : "Product 2", price : 34},
]

export const GET : APIRoute = async ({url}) => {
  const id = "1"
  if (id) {
    const product = Products.filter(p => p.id === id);
  
    if (!product) {
      return new Response(null, { status: 404, statusText : "Not Found" });
    }
  
    return new Response(JSON.stringify(product), {
      status : 200,
      headers : {
        "Content-Type" : "application/json"
      }
    });
  } else {
    return new Response(JSON.stringify("Hello World"), {
      status : 200,
      headers : {
        "Content-Type" : "application/json"
      }
    })
  }
}


export const POST : APIRoute = async ({params, request}) => {
  console.log("hey")
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    status : 200,
    headers : {
      "Content-Type" : "application/json"
    }
  });
}
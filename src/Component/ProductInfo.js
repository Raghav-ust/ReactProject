import React, { Component } from 'react'
import Product from './product'
import "./ProductInfo.css"
export class ProductInfo extends Component {
  products = [
    {
        "id":"  T10001",
        "title": "Bunny soft toy",
        "type": "toys",
        "description": "Mirada 35 cm bunny soft toy with extra fur, Multicolor 3Y+",
        "url": "https://hamleysgumlet.gumlet.io/product/492336754/300/492336754.jpg   ",
        "price": "Rs. 800",
        "rating": 4.7
    }, 
    {
      "id":"T10002",
      "title": "DukieKooky",
      "type": "toy",
      "description": "Kids Turquoise Blue & Pink Unicorn Soft Toy with extra fur",
      "url": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14585746/2022/11/9/4e2070f5-5a33-43fe-850a-ec1fb68ef23e1667994460961-DukieKooky-Kids-Turquoise-Blue--Pink-Unicorn-Soft-Toy-941667-5.jpg",
      "price": "Rs. 799",
      "rating": 4
  },
    {
        "id":"T10003",
        "title": "DearJoy",
        "type": "toy",
        "description": "Kids Grey & Brown Elephant & Monkey Soft Toy",
        "url": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20475986/2022/10/20/f3a4530f-204a-4c67-b504-a763f0f92eff1666276624609DearJoyKidsGreyBrownElephantMonkeySoftToy1.jpg",
        "price": "Rs. 400",
        "rating": 4
    },
    
  {
    "id":"T10004",
    "title": "Toy Swing Chicken 9909B",
    "type": "toy",
    "description": "The cute chick has a cartoon appearance. It can sing and walk.",
    "url": "https://bazarexonline.com/crm/public/uploads/subcategory_images/9msLDJjDS1Gun9ZrAQl1Onx3Dikg6K.jpg",
    "price": "Rs. 850",
    "rating": 4
}
  ]
  constructor()
  {
      super();
      this.state = {
          products: this.products
      }
  }
  render() {
    return (
        <div className="container">
        <h2>Product List</h2>
        <div className="row">
        {this.state.products.map((product)=>{
             return <div className="col" key={product.id}>
             <Product  title={product.title} description={product.description} price={product.price} imageUrl={product.url}/> 
         </div>
        })}
            
        </div>
     </div>
    )
  }
}

export default ProductInfo
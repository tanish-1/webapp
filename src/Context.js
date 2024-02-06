import React, { Component } from 'react'
import { rowdata } from './appdata'
const ProductContext = React.createContext();
 class ProductProvider extends Component {

    state = {
        Alldata: rowdata
    }
  render() {

    return (
      <div>
        <ProductContext.Provider value = {{...this.state}}>
{this.props.childern}
        </ProductContext.Provider>
      </div>
    )
  }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider, ProductConsumer}

import React from "react"
import {API_URL} from '../../config'
import {handleReasponse} from '../../helpers'
import './table.css'


class List extends React.Component{
    constructor(){
        super()
        this.state={
          
            loading : false,
            currencies : [],
            error:''
        }
    }

    componentDidMount(){

      this.setState({
        loading : true
        
      })
    

      
      fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)  
      .then(handleReasponse)
      .then(data=>{
        
        this.setState({
          currencies: data.currencies,
          loading :false
      })
    })
      .catch(error=>{
        
        this.setState({
          error:error.errorMessage,
          loading:false
        })
        
        
      })

    }

    renderChangePercent(percent){
      if(percent>0){
        return <span className="percent-raised">{percent}% &uarr;</span>
      }
      else if(percent<0){
        return(<span className="percent-fallen">{percent}% &darr;</span>)
      }
      else{
        return <span>0</span>
      }
    }
    render(){
console.log(this.state.currencies)
        if(this.state.loding){
          
          return(
            <div>loading</div>
          )
        }
        if(this.state.error){
          return(<div>{this.state.error}</div>)
        }
        

        return(
          <div className="Table-container">
            <table className="Table">
                <thead className="Table-head">
                    <tr>
                      <th>Cryptocurrency</th>
                      <th>Price</th>
                      <th>Market Cap</th>
                      <th>25H chnage</th>
                    </tr>
                </thead>
                <tbody className="Table-body ">
                    {this.state.currencies.map(currency=>(
                      <tr key ={currency.id}>
                        <td><span className="Table-rank">{currency.rank}</span>{currency.name}</td>
                        <td><span className="Table-dollar">$</span>{currency.price}</td>
                        <td ><span className="Table-dollar">$</span>{currency.marketCap}</td>
                        <td >{this.renderChangePercent(currency.percentChange24h)}</td>
                      </tr>
                    ))}
                </tbody>
            </table>
          </div>
        )
    }
  }

export default List




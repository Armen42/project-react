import React from "react"
class List extends React.Component{
    constructor(){
        super()
        this.state={
          
            loding : false,
            currencies : [],
            error:''
        }
    }

    componentDidMount(){
      this.setState({
        loding : true
      })

      
        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
      .then(response=> {
        return response.json().then(json =>{
          return response.ok?json:Promise.reject(json)
        })

      }).then(data=>{
        this.setState({currencies: data.currencies,loding :false})
      })
      .catch(error=>{
        
        this.setState({
          error:error.errorMessage,
          loding:false
        })
        
        
      })

    }
    render(){

        if(this.state.loding){
          return(
            <div>loding</div>
          )
        }
        if(this.state.error){
          return(<div>{this.state.error}</div>)
        }
        return(
          <div>List</div>
        )

        return(
            <div>List</div>
        )
    }
  }

export default List




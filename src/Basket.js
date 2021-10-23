import React, { Component } from 'react';
import {Container,Card,Button,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default class Basket extends Component {
  state={
    item: JSON.parse(localStorage.getItem('key')) || []
  }
  componentDidUpdate(prevProps, prevState, snapshot){ 
    if(prevState.item !== this.state.item){ 
        localStorage.setItem('key',JSON.stringify(this.state.item)) 
    }
  }
  butt = (s)=>{ 
    if(this.state.item.find(v=>v.id===s.id)){
        const as =this.state.item.filter(i=> i.id !== s.id)
        this.setState((p)=>{
            return{item:as}
        })
       }else{
     this.setState(pre =>{
         const a = [...pre.item, s]
         return{item:a}
     })
  }   
  } 
  render(){
    
      return (
        <Container>
         {!(this.state.item.length > 0) && <div align='center'><Button as={Link} to={'/'}><h1>Назад</h1></Button>
         <div className='image'><Image src="https://a.d-cd.net/5b4338u/480.jpg" /></div></div>} 
      <div className=" d-flex justify-content-around flex-wrap m-2"> 
      {this.state.item.map((v, i) => { 
              return ( 
      <Card className="p-1 m-2 " style={{ width: "18rem",}} >
                {v.discount && <div className='div2'>Скидка {v.discount}%</div>} 
            <Card.Img variant="top" className="w-100 img_ h-75 "  src={v.main_image} />
            <Card.Body> 
            <Card.Title className=''>{v.title}</Card.Title> 
            <h4>{(v.discount) ?  
            <> 
            <span style={{color: 'green'}}>      
            {(v.price-(v.price * v.discount)/100).toFixed()}c 
            </span> 
            <s style={{marginLeft: '7px', color: 'red'}}>{v.price}c</s> 
            </> 
            : <div style={{color: 'green'}}> 
            {v.price}c 
            </div> 
            } 
            </h4> 
            <div align='center'>
            
              
            <Button className={this.state.item.find(r => r.id === v.id) ? 'btn btn-danger' : 'btn btn-primary'} onClick={() =>this.butt(v)}>
               {this.state.item.find(r => r.id === v.id) ? 'Удалить' : 'Добавить корзину'}</Button>  
            
            </div> 
            </Card.Body> 
          </Card>
         
      )})}
       </div>
      </Container>
  
        
      );
     }
    }



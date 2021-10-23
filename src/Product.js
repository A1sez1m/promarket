// import React, { Component } from 'react';
// import {Button,Card} from 'react-bootstrap' 
// import {Link} from 'react-router-dom'

// export default class Product extends Component {
//   state = { 
//     item:this.props.product || [], 
//     id : '',
//   }
//       componentDidUpdate(prevProps, prevState, snapshot){ 
//             if(prevState.item !== this.state.item){ 
//                 localStorage.setItem('key',JSON.stringify(this.state.item)) 
//             }
//         }
//       butt = (s)=>{ 
//           if(this.state.item.find(v=>v.id===s.id)){
//               const as =this.state.item.filter(i=> i.id!==s.id)
//               this.setState((p)=>{
//                   return{item:as}
//               })
//              }else{
//            this.setState(pre =>{
//                const a = [...pre.item, s]
//                return{item:a}
//            })
//        }   
//     } 

//     componentDidMount(){
//       this.setState({item: this.props.product})
//     }
//   render() {

//     return (
//         <>
//         {console.log( this.state.item)}
//           {this.state.item.map((v) => { 
//               <Card className="p-1 m-2 " style={{ width: "18rem",}} >
//               {v.discount && <div className='div2'>Скидка {v.discount}%</div>} 
//           <Card.Img variant="top" className="w-100 img_ h-75 "  src={v.main_image} />
//           <Card.Body> 
//           <Card.Title className=''>{v.title}</Card.Title> 
//           <h4>{(v.discount) ?  
//           <> 
//           <span style={{color: 'green'}}>      
//           {(v.price-(v.price * v.discount)/100).toFixed()}c 
//           </span> 
//           <s style={{marginLeft: '7px', color: 'red'}}>{v.price}c</s> 
//           </> 
//           : <div style={{color: 'green'}}> 
//           {v.price}c 
//           </div> 
//           } 
//           </h4> 
//           <div align='center'>
          
//             <Link to="/add"> Подровнее</Link>
//           <br/>
//           <Button className={this.state.item.find(r => r.id === v.id) ? 'btn btn-danger' : 'btn btn-primary'} onClick={() =>this.butt(v)}>
//               {this.state.item.find(r => r.id === v.id) ? 'Удалить' : 'Добавить корзину'}</Button> 
          
//           </div> 
//           </Card.Body> 
//         </Card>
//           })}
//        </>  
//     );
//   }
// }

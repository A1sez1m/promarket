import React from 'react' 
import {Navbar, Nav, Form, FormControl,Container,Button,Card} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import Products from './products.json'
class App extends React.Component { 
  state = {
    item: JSON.parse(localStorage.getItem('key')) || [], 
    input:'',
    id : '',
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
  render() {
    const p = Products.filter(y => y.title.toLowerCase().indexOf(this.state.input.toLowerCase()) !== -1); 
    return ( 
      <> 
      <Container>
      <Navbar className='container' bg="dark" expand="dark"> 
  <Navbar.Brand style={{marginLeft: '70px', color:'white',}} className='p-2' href="#">Navbar</Navbar.Brand> 
  <Navbar.Toggle/> 
  <Navbar.Collapse className='d-flex justify-content-between'> 
    <Nav 
      className="mr-auto my-2 my-lg-0" 
      style={{ maxHeight: '100px' }}
      > 
<Nav.Link className="position-relative" as={Link} to={'/basket'}style={{color:'white'}}>
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{this.state.item.length}
    <span class="visually-hidden">this.state.item.length</span>
  </span> Корзина</Nav.Link> 
     </Nav> 

    <Form className="d-flex forms"> 
      <FormControl 
        onChange={(e)=>this.setState({input: e.target.value})} 
        type="search" 
        placeholder="Search" 
        className="mr-2 formcontrol" 
        aria-label="Search" 
      /> 
    </Form> 
  </Navbar.Collapse> 
</Navbar> 
</Container>
<Container>
  <h2 >Products({p.length})</h2> 
    <div className=" d-flex justify-content-around flex-wrap m-2"> 
    {p.map((v, i) => { 
            return ( 
    <Card className="p-1 m-2 " style={{ width: "18rem",}} >
              {v.discount && <div className='div2'>Скидка {v.discount}%</div>} 
          <div 
          className={'img_'}
          style={{
            backgroundImage:`url(${v.main_image})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            height:250,
            backgroundRepeat: 'no-repeat'
          }}>
          </div>
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
          <Button  as={Link} to={`/car/${v.id}`} className='butt m-2' 
            onClick={() =>{ 
            }}>Подробнее</Button> 
          <Button className={this.state.item.find(r => r.id === v.id) ? 'btn btn-danger' : 'btn btn-primary'} onClick={() =>this.butt(v)}>
              {this.state.item.find(r => r.id === v.id) ? 'Удалить' : 'Добавить корзину'}</Button> 
          
          </div> 
          </Card.Body> 
        </Card>
       
    )})}
     </div>
    </Container>
    </> 
     ) 
  } 
}export default App;
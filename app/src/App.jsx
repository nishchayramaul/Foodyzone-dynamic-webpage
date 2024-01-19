import styled from 'styled-components'
import './App.css'
import { useState,useEffect } from 'react'
import { Search } from './components/searchfilter/Search';

export const URL = "http://localhost:9000"
function App() {
 const [data,setdata] = useState(null);
 const [loading,setloading]  = useState(false);
 const[error,seterror] = useState(null);
 const[filtered_data,setfiltered_data] = useState(null);
 const[selectedbtn,setselectedbtn] = useState("all");

 useEffect(() => {
 const fetchdata = async () =>{
   setloading(true);

   try {
    
    const response = await fetch(URL);
    const json = await response.json() ;
    setdata(json);
    setfiltered_data(json);
    setloading(false);
   } catch (error) {
    seterror("Error Loading data")
   }

 } 
 fetchdata();

 },[])
 const search_data = (e) =>{

  const searchvalue = e.target.value;

  if(searchvalue === " "){
    setfiltered_data(null);
  }
  const filter = data?.filter((food) =>food.name.toLowerCase().includes(searchvalue.toLowerCase()) )
  setfiltered_data(filter)
; }
 if (error) return <div>{error}</div>;
 if(loading) return <div>Loading...</div>;
 
 const filter = (type) =>{
   
 if(type ==='all'){
  setfiltered_data(data);
  setselectedbtn('all')
 }
 const filter = data?.filter((food) =>food.type.toLowerCase().includes(type.toLowerCase()) )
  setfiltered_data(filter);
  setselectedbtn('type')

 }
 
  return (
    <Container>
      <Topsection>
      <div className="logo">
        <img src = '/public/Foody Zone.png' alt='logo'/>
      </div>
      <div className="input">
        <input onChange= {search_data} placeholder='Search your items'/>
      </div>
      </Topsection>
      <FilterSection>
        <Button on onClick={()=>filter('all')}>All</Button>
        <Button on onClick={()=>filter('breakfast')}>Breakfast</Button>
        <Button on onClick={()=>filter('lunch')}>Lunch</Button>
        <Button on onClick={()=>filter('dinner')}>Dinner</Button>
      </FilterSection>
      <Search data = {filtered_data}/>

    </Container>
  )
}

export default App


const Container = styled.div`
 margin: 0 auto;
 background-color:#0D0D0DC2 ;
 height: 100vh;
 max-width: 1500px;

`;

const Topsection = styled.section`

min-height:140px;
display: flex;
flex-wrap: wrap;
justify-content: space-between  ;
align-items: center;
padding:16px;


input{
  border: solid 1px  #FF0909;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  padding :0 10px;
  font-size: 16px;
  background: transparent;
}
.logo{
  margin-left:10%;
}
.input{
  margin-right:10%;
}
`;
const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`

 export const Button = styled.button`
  color: white;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #FF4343;
  padding: 6px 10px;
  margin: 0 10px; 
  cursor: pointer;

&:hover{
  background-color: #c54545;
}
`;



import styled from "styled-components"
import { Button, URL } from "../../App"
export const Search = ({data}) => {
  return (
    <FoodImageContainer>
    <FoodCardContainer>
        
       { data?.map(({name,image,text,price})=> (
            <FoodCard key= {name}>
              <div className="image">
                <img src={ URL + image}/>
              </div>
             <div className="food_info">
                <div className="info">  
                  <h3>{name}</h3>
                   <p> {text}</p>
                </div>
               
                <Button>${price.toFixed(2)}</Button>
             </div>
            </FoodCard>
       ))
 }
    </FoodCardContainer>
  </FoodImageContainer>
  )
}



const FoodImageContainer = styled.div`
  background-image: url('food.png');
  min-height: calc(100vh - 230px);
  background-size: cover;

`

const FoodCardContainer = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  padding:20px;
  row-gap:10px;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`
const FoodCard = styled.div`
border-radius: 19.447px;
border: 0.659px solid #d7d1d1;

background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);

background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);
width: 340px;
height: 167px;
display: flex;
padding :8px;

border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;


.info{
 display: flex;
 flex-direction: column;
 align-items: end;
 justify-content: space-between;
 color: white;
 font-family: 'Nunito', sans-serif; 
}
h3{
  padding-bottom: 10px;
}
Button{
    margin-top:5%;
    margin-left:55%
}
`
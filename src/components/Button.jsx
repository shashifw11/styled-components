import styled from "styled-components"

 
   export const Button = styled.button`
       margin-left : 5px ; 
       padding : 5px ; 
       background : ${props => props.id1 ? "skyblue" : "white"};
       color: ${props => props.id1 ? "white" : props.id5 ? "skyblue" : "black"};
       border : ${props => props.id2 ? "1px solid gray" : props.id3 ? "1px dashed black" : "none"};
       border-radius : 5px ; 
       font-size : 20px ; 
  `



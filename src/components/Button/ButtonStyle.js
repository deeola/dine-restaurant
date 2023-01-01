import styled from "styled-components";
import { Colors } from "../../Themes/Colors";

const handleHover= (hover) => {
    switch (hover) {
      case "light":
        return `color: ${Colors.white}; background: ${Colors.mirage};`;
      default:
        return `color: ${Colors.mirage}; background: ${Colors.white}; border:1px solid ${Colors.mirage};`;
        
    }
};

const handleColorType = (colors) => {
    switch (colors) {
      case "light":
        return `color: ${Colors.mirage}; background: ${Colors.white};`;
      default:
        return `color: ${Colors.white}; background:${Colors.mirage};`;
    }
};

const handleActive = (inactive) => {
    if(inactive) {
   return `pointer-events: 'none' ; opacity: 0.4; cursor: not-allowed`
    }
};

export const Button = styled.button`
width: 170px;
height: 64px;
text-transform: uppercase;
text-decoration: none;
font-size: 17px;
cursor: pointer;
display: block;
${({ color }) => handleColorType(color)};
${({ inactive }) => handleActive(inactive)};
&:hover{
    ${({ hover }) => handleHover(hover)};
  }
`

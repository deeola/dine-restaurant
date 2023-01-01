import styled from "styled-components";
import { Colors } from "../../../Themes/Colors";

const handleActive = (inactive) => {
    if(inactive) {
   return `pointer-events: 'none' ; opacity: 0.4; cursor: not-allowed`
    }
};

export const NormalNumb = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
border-bottom : 1px solid ${Colors.mirage};
${({ inactive }) => handleActive(inactive)};
`

export const Control = styled.p`
font-size: 20px;
color : ${Colors.beaver};
cursor: pointer;
`

export const MainDisplay = styled.p`
font-weight: bold;
`
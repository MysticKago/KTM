import styled from "styled-components";

const Footer2 = () => {
    return (  
        <Lower>
            <p>Copyright © 2021 Kago Tony Molemogi.</p>
        </Lower>
    );
}
 
const Lower = styled.footer`
    background-color: #F3F3F3;
    color: #6A6A6A;
    font-size:12px;
    padding: 8px;
    left: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    text-align: center;
    z-index: -1;
`;

export default Footer2;
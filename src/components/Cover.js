import styled from "styled-components";
import Me from "../assets/me.jpg";

const Cover = () => {
    return (  
        <Coverr>
            <Img src={Me} alt="Kago Tony Molemogi"/>
            <Bio>
                <h2>Kago Tony Molemogi</h2>
                <a>Web Developer / Motion Graphic Designer</a>
            </Bio>
        </Coverr>
    );
}

const Coverr = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #F3F3F3;
    margin: 80px 0 0 0;
    padding: 1% 0 5% 18%;

    @media (max-width: 768px){
        padding: 1.5rem;
        margin: 65px 0 0 0;
        transition: 0.2s ease-in-out;
    }
`;
const Bio = styled.div`
    padding: 0 0 0 40px;
    color: #6A6A6A;

    a {
        font-style: italic;
        color: #6D6D6D;
    }
    h2 {
        margin: 46px 0 0 0;
    }
    @media (max-width: 768px){
        padding: 0 0 0 12px;
        transition: 0.2s ease-in-out;
        font-size: 12px;

        h2 {
            margin: 30px 0 0 0;
        }
    }
`;
const Img = styled.img`
    height: 100px;
    border-radius: 100px;
    transition: 0.2s ease-in-out;

    @media (max-width: 768px){
        height: 70px;
        transition: 0.2s ease-in-out;
    }
`;
export default Cover;
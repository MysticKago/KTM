import styled from "styled-components";

const Projects = () => {
    return ( 
        <Container>
            <Pop>
                <Video width="400" src="https://www.youtube.com/embed/bM6e1eXWubU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>FNB Payment Guide DEMO</Title>
            </Pop>
            <Pop>
                <Video width="400" src="https://www.youtube.com/embed/D0fows-HMLk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>Intro Logo Animation</Title>
            </Pop>
            <Pop>
                <Video width="400" src="https://www.youtube.com/embed/bZP2IqIEVzE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>Nandos Menu Demo</Title>
            </Pop>
            <Pop>
                <Video width="400" src="https://www.youtube.com/embed/DgYbKWJgX4o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>Infographics</Title>
            </Pop>
            <Pop>
                <Video width="400" src="https://www.youtube.com/embed/kJfHfZPAe4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>3D Rain</Title>
            </Pop>
            <Pop>
                <Video width="400" src="https://www.youtube.com/embed/javjNdGaAA8?list=UUfnQLRFnZBEQ0jGwcFO9vDg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>Shy ones</Title>
            </Pop>
            <Pop>
                <Video width="400" src="https://www.youtube.com/embed/6EuwjwPDTAA?list=UUfnQLRFnZBEQ0jGwcFO9vDg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>WOW emoji in real life</Title>
            </Pop>
            <Pop>
                <Video width="400" src="https://www.youtube.com/embed/ctUgelP0fdw?list=UUfnQLRFnZBEQ0jGwcFO9vDg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>Animations in Motion</Title>
            </Pop>
            <Pop><Video width="400" src="https://www.youtube.com/embed/Le3Gr65G3ho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Title>CJ9sevn - Blame (Animated Music Video)</Title>
            </Pop>
        </Container> 
    );
}

const Video = styled.iframe`
    height: 228px;
    border-radius: 10px 10px 0 0;

    @media (max-width: 768px){
        height: 100%;
        width: 100%;
    }
`;
const Title = styled.h3`
    color: #6D6D6D;
    padding: 0 0 0 20px;
`;
const Container = styled.div`
    width: 80%;
    margin: -50px auto;
    padding: 0 0 65px 0;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px){
        width: 93%;
        margin: -20px auto;
    }
`;
const Pop = styled.div`
    background-color: white;
    border-radius: 10px;
    height: 100%;
    margin: 10px;
    box-shadow: 0px 3px 15px -8px rgba(0,0,0,0.69);

    p {
        font-size: 12px;
        color: #707070;
    }
    a {
        color: #888888;
        font-weight: bold;
    }
    @media (max-width: 768px){
        width: 90%;
    }
`;
export default Projects;

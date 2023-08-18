import styled from "styled-components";
import Film from "../assets/film.svg";
import Podcast from "../assets/podcast.svg";
import Chess from "../assets/chess.svg";
import Drawing from "../assets/pencil.svg";

const Overview = () => {
    return (  
        <Container>
            <Pop>
                <Title>PROFILE</Title>
                <p>Enthusiastic and innovative 28-year-old software engineer adept at crafting efficient and user-friendly web systems. Proficient 
                    in web technology and coding to drive organizational success. Accomplished motion graphic designer with a track record of 
                    producing engaging animated content and managing projects from inception to completion. Effective communicator, strategic 
                    thinker, and creative problem solver dedicated to tailoring web applications to fulfill specific organizational needs and 
                    enhance core competencies.</p>
            </Pop>
            <Pop>
                <Title>EDUCATION</Title>
                <a>Bachelor of Science (Hons) in Software Engineering with Multimedia</a>
                <p>AUGUST 2015 — DECEMBER 2019 Limkokwing University, Block 7, Gaborone,Botswana</p>
                
                <a>Software Engineering with Multimedia</a>
                <p>Together they make powerful set of skills that goes beyond each indivitual profession which truly represent Information Communication Technologies.
                Developed a powerful skill set encompassing both software engineering and multimedia, representing a holistic approach to Information Communication Technologies.
                </p>
            </Pop>
            <Pop>
                <Title>WORK EXPERIENCE</Title>
                <a>FNB Botswana - Animated Training Videos:</a>
                <p>Independently and collaboratively developed animated training videos, enhancing employee onboarding and customer product understanding.</p>
                
                <a>Motion Graphic Limkokwing Career Fair Video:</a>
                <p>Conceptualized and created a captivating Career Fair video, effectively introducing prospective students to available courses in an engaging manner.</p>

                <a>Animated Music Video:</a>
                <p>Collaborated on a two-person project to produce an animated music video, demonstrating proficiency in creating mood-capturing illustrations for diverse scenes.</p>
            </Pop>
            <Pop>
                <Title>SKILLS</Title>
                <a>Multimedia</a>
                <Prog>
                    <p>Adobe Photoshop</p>
                    <Span></Span>
                </Prog>
                <Prog>
                    <p>Adobe Illustrator</p> 
                    <Span></Span>
                </Prog>
                <Prog>
                    <p>Adobe After Effects</p> 
                    <Span></Span>
                </Prog>
                <Prog>
                    <p>Adobe Premier Pro</p>
                    <Span></Span>
                </Prog>
                <Prog>
                    <p>Adobe XD</p>
                    <Span></Span>
                </Prog> 
                
                <a>Development Skills</a>
                <Prog>
                    <p>HTML & CSS</p>
                    <Span></Span>
                </Prog> 
                <Prog>
                    <p>JavaScript</p> 
                    <Span></Span>
                </Prog> 
                <Prog>  
                    <p>React JS</p> 
                    <Span></Span>
                </Prog>
                <Prog>  
                    <p>Node JS</p> 
                    <Span></Span>
                </Prog>
            </Pop>
            <Pop>
                <Title>HOBBIES</Title>
                <Col>
                    <Hobbies>
                        <Img src={Film} alt=""/>
                        <a>Films</a>
                    </Hobbies>
                    <Hobbies>
                        <Img src={Podcast} alt=""/>
                        <a> Podcasts</a>
                    </Hobbies>
                    <Hobbies>
                        <Img src={Chess} alt=""/>
                        <a> Chess</a>
                    </Hobbies>
                    <Hobbies>
                        <Img src={Drawing} alt=""/>
                        <a> Drawing</a>
                    </Hobbies>
                </Col>
            </Pop>
        </Container>
    );
}
const Prog = styled.div`
    margin: 0 0 0 25px;

    p {
        font-style: italic;
    }
`;
const Span = styled.span`
    position: absolute;
    margin: -23px 0 0 113px;
    height: 6px;
    padding: 0 15% 0 0;
    background-color: #6A6A6A;
    transition: 0.2s ease-in-out;
    
    @media (max-width: 768px){
        padding: 0 39% 0 0;
    }
`;
const Col = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const Hobbies = styled.div`
    margin-bottom: 13px;
    width: 83px;
    text-align: center;
`;
const Container = styled.div`
    width: 80%;
    margin: -55px auto;
    justify-content: center;
    display: flex;
    padding: 0 0 65px 0;
    flex-wrap: wrap;

    @media (max-width: 768px){
        width: 93%;
        margin: -20px auto;
    }
`;
const Pop = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 0px 15px;
    margin: 10px;
    width: 40%;
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
const Title = styled.h3`
    color: #6D6D6D;
`;
const Img = styled.img`
    height: 40px;
    transition: 0.2s ease-in-out;
    padding: 20px;

    @media (max-width: 768px){
        height: 40px;
        transition: 0.2s ease-in-out;
    }
`;

export default Overview;

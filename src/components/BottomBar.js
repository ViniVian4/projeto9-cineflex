import styled from 'styled-components';

export default function BottomBar({ image, title, session }) {
    return (
        <>
            <Footer>
                <ImageContainer>
                    <img src={image} />
                </ImageContainer>
                <Info>
                    <p>{title}</p>
                    <p>{session}</p>
                </Info>


            </Footer>

        </>
    )
}

const Footer = styled.div`
    box-sizing: border-box;
    
    display: flex;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 120px;

    padding: 10px;

    background-color: #9EADBA;

    p {
        font-size: 26px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 64px;
    height: 89px;

    background-color: #FFFFFF;

    box-shadow: 0 1px 5px rgb(102, 102, 102);
    border-radius: 2px;

    img {
        width: 48px;
        height: 72px;
    }

`;

const Info = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 10px;
`
import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    width: ${(props) => props.width ? props.width : '100%'};
    height : ${(props) => props.height ? props.height : '8vh'};

    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#99A4EF'};

    border-radius : 10px;
    border : none;

    margin-top : ${(props) => props.marginTop ? props.marginTop : '20px'};
    margin-bottom : ${(props) => props.marginBottom ? props.marginBottom : '20px'};
`

const ButtonTitle = styled.span`
    color: ${(props) => props.color ? props.color : 'white'};

    font-size: ${(props) => props.fontSize ? props.fontSize : '24px'};
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = ({
    width,
    height,

    marginBottom,
    marginTop,

    backgroundColor,
    color,

    fontSize,

    title,

    onClick,
}) => {
    return(
        <ButtonContainer
            width = {width}
            height = {height}

            marginBottom = {marginBottom}
            marginTop = {marginTop}

            backgroundColor = {backgroundColor}

            onClick={onClick}
        >
            <ButtonTitle
                color = {color}

                fontSize = {fontSize}
            >
                {title}
            </ButtonTitle>
        </ButtonContainer>
    )
}
import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display : flex;
    
    width: ${(props) => props.width ? props.width : '100%'};
    height : ${(props) => props.height ? props.height : '10px'};
`

const InputField = styled.input`
    width : 100%;

    flex : 7;

    padding : 0.5rem 1.5rem 0.5rem 1.5rem;

    border : 1px solid #F2F2F2;
    border-radius : 5px;

    font-size : ${(props) => props.fontSize ? props.fontSize : '20px'};
    font-weight : bold;

    color : #B8B8B8;
    background-color : #F2F2F2;
    
    type : ${(props) => props.type ? props.type : 'text'};
    
    &::placeholder {
        color: #B8B8B8;

        font-weight: bold;
    }

    &:focus {
        outline: none;
    }
`

const InputButton = styled.button`
    flex : 3;
    
    background-color : #F2F2F2;

    border : none;
    border-radius : 20px;

    margin-left : 30px;
`

const InputButtonText = styled.span`
    color : white;

    font-size : ${(props) => props.buttonFontSize ? props.buttonFontSize : '20px'};
    font-weight: bold;
`

export const Input = ({
    width,
    height,

    placeholder,
    
    fontSize,

    buttonTitle,
    buttonFontSize,

    onChange,
    onClick,

    id,
    type
}) => {
    return(
        <InputContainer
            width = {width}
            height = {height}
        >
            <InputField
                id = {id}
                type = {type}
                
                placeholder = {placeholder}

                fontSize = {fontSize}

                onChange={(e) => onChange(e.target.value)}
            />
            {
                buttonTitle &&
                <InputButton
                    onClick={onClick}
                >
                    <InputButtonText
                        buttonFontSize = {buttonFontSize}
                    >
                        {buttonTitle}
                    </InputButtonText>
                </InputButton>
            }
        </InputContainer>
    )
}
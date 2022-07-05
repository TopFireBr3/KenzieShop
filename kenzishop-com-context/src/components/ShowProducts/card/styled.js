import styled from "styled-components";


export const Divflex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.f};
    align-items: ${(props) => props.a};
    justify-content: ${(props) => props.j};
    gap: ${(props) => props.g};
    text-align: ${(props) => props.t};

    overflow-x: ${(props) => props.ox};
    overflow-y: ${(props) => props.oy};

    width: ${(props) => props.w};
    height: ${(props) => props.h};

    padding: ${(props) => props.p};
    border: ${(props) => props.b};
    border-radius: ${(props) => props.br};

    margin-bottom: ${(props) => props.mb};
    margin: ${(props) => props.m};

    background-color: ${(props) => props.bc};



    img{
        padding:10px;
        height: 150px;
        width: 150px;
        border-radius: 10px;
    }
    p{
        font-size:17px;
        margin:0;
        overflow:hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical
    }
    h4{
        overflow:hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:1;
        -webkit-box-orient:vertical
    }
    span{
       font-size: 20px;
    }
    figure{
        border: 2px solid black;
        border-radius:20px;
        background-color:white;
        width: 80%;
    }

`
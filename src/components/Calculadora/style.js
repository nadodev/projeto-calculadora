import styled from "styled-components";


export const Container = styled.div`
    max-width: 100%;
    width: 500px;
    margin: 30px auto;

    .jumbotron{
        background:#e1e1e1;
        margin: 0 30px;
        padding: 10px;
        border-radius: 5px;

        .colum{
            width: 100%;
            height: 50px;
            margin-bottom: 5px;
            display: flex;
            justify-content:space-around;

            .display{
                width:290px;
                height: 50px;
                background:white;
                border-radius: 10px;

                input{
                    width: 100%;
                    height: 50px;
                    border: 0;
                    border-radius: 10px;
                    padding-left:10px;
                    margin-left: -20px;
                }
            }
            .btn{
                width: 100px;
                height: 50px;
                margin-right: 5px;

                &+.btn{
                    margin-left: 5px;
                }
                background:white;
                border-radius: 10px;
                outline: none;
                transition: background-color 0.5s;

                &:hover{
                    background:#eee;
                }

                &.C{
                    background-color:#DE1E0B;
                    color: white;
                    margin-right: 25px;
                }
                &.igual{
                    background-color:green;
                    color: white;
                }
                &.Azul{
                    background-color:#0D69FF;
                    color: white;
                }
            }
        }
    }
`;
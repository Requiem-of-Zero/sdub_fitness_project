import styled from 'styled-components';

export const CTATilesWrapper = styled.div`

`;

export const CTATilesContainer = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
    width: 980px;
    margin: 0 auto;
    img {
        width: 100%;
        height: 150px;
        background-size: 200px 100px;
    }
`;

export const LeftSection = styled.div`

    >h2 {
        font-weight: 400;
        font-style: italic;
    }

    hr {
        margin-bottom: 30px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            float: left;
            width: 47%;
            a {
                color: black;
                text-decoration: none;
                &:hover{
                    color: black;
                    text-decoration: underline;
                }
            }

            .read_more{
                color: blue;
            }
        }
        
        li:nth-child(1){
            padding-bottom: 30px;
        }

        li:nth-child(odd){
            padding-right: 30px;
        }
    }
`;

export const RightSection = styled.div`

`;


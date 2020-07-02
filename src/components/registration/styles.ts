import styled from 'styled-components';


export const Form = styled.form`
    position: relative;
    margin: 0 auto;
    top: 100px;
    width: 400px;
    height: 605px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h1`
    padding-top: 12px;
    font-family: 'Roboto', san-serif;
    font-size: 28px;
    text-align: center;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
`;

export const NameInput = styled.input`
    margin-top: 23px;
    padding: 7px 16px;
    text-decoration: none;
    font-family: 'Roboto', san-serif;
    font-size: 14px;
    width: 320px;
    height: 44px;
    background: #F5F8FA 0% 0% no-repeat padding-box;
    border-radius: 8px;
    border: none;
    opacity: 1;
    text-align: left;
    letter-spacing: 0px;
    color: #A2A2A2;
`;

export const DataInput = styled.input`
    margin-top: 21px;
    padding: 3px 0;
    text-decoration: none;
    font-family: 'Roboto', san-serif;
    font-size: 14px;
    width: 299px;
    height: 50px;
    background: #F5F8FA 0% 0% no-repeat padding-box;
    border-radius: 8px;
    border: none;
    opacity: 1;
    text-align: left;
    letter-spacing: 0px;
    color: #A2A2A2;
    padding-left: 50px;
    background-image: url(${props =>
    // @ts-ignore
    props.img});
    background-position: 18px 20px;
`;

export const DropDown = styled.div`
    cursor: pointer;
    margin-top: 23px;
    padding: 6px 16px;
    font-family: 'Roboto', san-serif;
    font-size: 14px;
    width: 320px;
    height: 44px;
    background: #F5F8FA 0% 0% no-repeat padding-box;
    border-radius: 8px;
    border: none;
    opacity: 1;
    text-align: left;
    letter-spacing: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SelectWrapper = styled.div`
    height: 44px;
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
    color: ${props =>
    // @ts-ignore
    props.isColor ? '#222222' : '#A2A2A2'};
    }
`;

export const Select = styled.div`
    display: ${props =>
    // @ts-ignore
    props.isActive ? "block" : "none"};
    margin: 0;
    padding: 6px 0 0 0;
    font-family: 'Roboto', san-serif;
    font-size: 14px;
    cursor: pointer;
    height: 196px;
    width: 350px;
    max-height: 300px;
    position: absolute;
    top: 400px;
    left: 25px;
    overflow: hidden;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 8px #00000026;
    border-radius: 8px;
`;

export const CountryDiv = styled.div`
    padding: 10px 0 0 19px;
    font-family: 'Roboto', san-serif;
    font-size: 14px;
    color: #222222;
    cursor: pointer;
    height: 36px;
    &:hover {
        background-color: #F5F8FA;
    }
`;

export const Gender = styled.div`
    margin-top: 30px;
    width: 390px;
    display: flex;
`;

export const GenderContainer = styled.div`
    padding: 3px 16px;
    font-family: 'Roboto', san-serif;
    font-size: 14px;
    display: flex;
    align-items: center;
`;

export const RadioInput = styled.input`
    margin: 0;
    padding: 0;
    margin-right: 8px;
    width: 14px;
    height: 14px;
`;

export const AcceptContainer = styled.div`
    margin-top: 20px;
    font-family: 'Roboto', san-serif;
    font-size: 14px;
    width: 358px;
    display: flex;
    align-items: center;
`;

export const CheckboxInput = styled.input`
    margin: 0;
    padding: 0;
    margin-right: 8px;
    width: 14px;
    height: 14px;
`;

export const BlueSpan = styled.span`
    color: #0094FF;
`;

export const ButtonSubmit = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    text-decoration: none;
    margin-top: 37px;
    font-family: 'Roboto', san-serif;
    font-size: 18px;
    width: 343px;
    height: 62px;
    border: none;
    border-radius: 31px;
    background: ${props =>
    // @ts-ignore
    props.activeSubmit ? "#0094FF" : "#A2A2A2"} 0% 0% no-repeat padding-box;
    color: #FFFFFF;
    cursor: pointer;
`;

export const ErrorContainer = styled.div`
    margin-bottom: -14px;
    margin-top: 2px;
    font-family: 'Roboto', san-serif;
    color: #E82828;
    font-size: 10px;
    width: 330px;
`;

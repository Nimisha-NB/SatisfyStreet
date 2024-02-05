import React from 'react';
import { stylize } from '../../utils/stylize';

const LoginPage = () => {
    stylize(`
        h1 {
            font-size: 128px;
        }
        input {
            display: block;
            margin: auto;
            padding: 15px 50px;
            border-radius: 25px;
            margin-bottom: 20px;
        }

        button{
            background-color: pink;
            border: 0px;
            border-radius: 25px;
            padding: 15px 100px;
        }
        button:hover{
            background-color: yellow;
        }
        img{
            height: 100px;
            margin: 0;
        }
        p{
            color: gray;
        }
        .person{
            color: pink;
            display: inline;
        }
    `);

    const clickHandler = (e) => {
        window.location.href = '/home';
    }

    return (
        <div>
            <img src="/dsce.png" alt="" />
            <p>Semester 3 WebTech Project</p>
            <p>made by <div className='person'>Nimisha NB</div>(CS140), <div className='person'>Manas Hejmadi</div>(CS117),<div className='person'> Manish S</div>(CS119), <div className='person'>Raqeeb Haider</div>(CS)</p>
            <h1><strong>SatisfyStreet</strong></h1>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />

            <button onClick={clickHandler}>Login</button>

        </div>
    );
}
export default LoginPage;
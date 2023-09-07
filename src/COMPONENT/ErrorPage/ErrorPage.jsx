import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    console.error(error);
    return (
        <div id="error-page" className=' mx-auto  w-3/12 my-20 font-bold'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {/* {<button onClick={()=>window.location='/'} >Go back</button>} */}
            <button className='my-5 delete-btn' onClick={goBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;
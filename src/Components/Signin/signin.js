import React from 'react'
import { ReactComponent as Ques } from './question.svg'
import { ReactComponent as Logos } from './logo.svg'
import styles from "./signin.css"

const signin = () => {
    return (
        <>
            <div className='signin col-lg-8 col-md-6 mx-auto mt-5 d-none d-sm-flex '>
                <div className='form py-3 col-lg-7 col-md-4 col-12'>
                    <Logos className=' col-3 logo mx-5 my-4 mb-4' />
                    <form action="action_page.php" method="post">
                        <div class="container text-left col-12 ms-5">
                            <p className="text-light text-left signin-text">Sign in</p>
                            <input type="text" className='email' placeholder="email" name="email" required />
                            <hr ></hr>
                            <p className='my-4'></p>
                            <input type="password" className='pwd' placeholder="Password" name="psw" required />
                            <p className='text-light text-end mt-2 col-8 fs-5 '>Forgot Password ?</p>
                            <button type="submit" class="btn-login col-8 btn-block text-center p-2 m-2">Sign in</button>
                        </div>
                        <div className='d-flex flex-row para'>
                            <p className='text-light mt-3 '>Don’t have an account yet?</p>
                            < a className='signup-text mt-3' > {' '}Sign Up!</a>
                        </div>
                    </form>
                </div>
                <div className='col-lg-5 col-md-4 img-fluid my-auto p-3 col-12'>
                    <Ques className='col-10 my-3 mx-5' />
                    <p className='text-light text-center'>Small info tidbit about D3Crypt.
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
            </div >


            <div className="col-10 d-flex flex-column d-sm-none justify-content-around mx-auto mobile my-auto mt-5 ">
                <div className='col-10 mx-auto img-fluid'>
                    <Ques className='col-12 m-3' />
                </div>
                <div className='form-mobile p-3 col-lg-6 d-inline-block'>
                    <form action="action_page.php" method="post">
                        <div class="container text-left col-12 ">
                            <p className="text-light text-center fs-3">Sign in</p>
                            <input type="text" className='fs-5' placeholder="email" name="email" required />
                            <p className='my-4'></p>
                            <input type="password" className='fs-5' placeholder="Password" name="psw" required />
                            <p className='text-light text-end mt-2 me-4 fs-6'>Forgot Password ?</p>
                            <button type="submit" class="btn-login col-10 btn-block p-2 m-2 fs-3 text-center">Sign in</button>
                            <div className='d-flex flex-row '>
                                <p className='text-light mt-3 fs-6 text-center'>Don’t have an account yet?Sign Up!</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default signin
import React from "react";
import styles from "./signInForm.module.scss";
import {FacebookIcon , GoogleIcon} from "../svg/svg"
const signInForm = props=>{
    return(
        <div className={styles.signIn}>
            <div className={styles.title}>
            <h3> sign in </h3>
            <span>to access your account</span>
            </div>
            <div className={styles.form}>
                <div className={styles.inputGroup}>
                     <label>Email</label>
            <input type="email"/>
                </div>
            <div className={styles.inputGroup}>
                <label>Password</label>
            <input type="password"/>
            </div>
            
            <div className={styles.passwordSettings}>
                <div className={styles.rememberMe}>
                <input type="checkbox"/>
                <label>Remember me</label>
                </div>
                <span>Forget Password ?</span>
            </div>
            <button className={styles.login}>Login</button>
            <div className={styles.socialBtns}>
                <button className={styles.facebook}>
                    <FacebookIcon/> <span>Facebook</span>
                </button>
                <button className={styles.google}>
                    <GoogleIcon/> <span>Google</span>
                </button>
            </div>
            <div className={styles.signupContainer}>
                <span>Don't have account, sign up now</span>
                <button className={styles.signUp}>Sign up</button>
            </div>
            </div>
        </div>
    )
}

export default signInForm
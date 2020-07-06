import React,{Component} from "react";
import styles from "./signIn.module.scss";
import menu from "../../components/menu -white/menu-white";
import Banner from "../../components/address banner/Banner";
import MenuWhite from "../../components/menu -white/menu-white";
import Footer from "../../components/footer/footer";
import SignInForm from "../../components/sign in form/signInForm"

class SignIn extends Component {
    render(){
        return(
            <div className={styles.signin}>
                <MenuWhite/>
                <Banner/>
                <SignInForm/>
                <Footer/>
            </div>
        )
    }
}

export default SignIn
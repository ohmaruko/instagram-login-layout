import styles from './Form.module.css'
import Image from 'next/image'

export default function Form () {
    return(
        <div className={styles.formOuterContainer}>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>
                        <Image src={'/Images/instagramLogo.png'} alt="instagram logo" width={200} height={90}/>
                    </legend>
                    <input
                        id='username'
                        className={styles.username}
                        type='text'
                        placeholder='Phone number, username, or email'
                        />
                    <input
                        id='password'
                        className={styles.password}
                        type='password'
                        placeholder='Password'
                        />
                     <button className={styles.button}>Log in</button>
                    </fieldset>
                </form>
                <p> OR </p>
                <a href='#' className={styles.bold}>
                <Image src={'/Images/facebook.png'} className={styles.facebookIcon} alt='google play' width={16} height={16}/>
                &nbsp; Log in with Facebook</a><br />
                <a href='#' className={styles.regular}>Forgot password?</a>
            </div>
            <div className={styles.formContainer}>
                <p>Don't have an account? <a href='#' className={styles.bold}>Sign up</a></p>
            </div>
            <div>
                <p>Get the app.</p>
                <a href='#' className={styles.appLink}>
                    <Image src={'/Images/appleStore.png'} alt='apple store' width={100} height={30}/>
                </a>
                <a href='#' className={styles.appLink}>
                    <Image src={'/Images/googlePlay.png'} alt='google play' width={100} height={30}/>
                </a>
            </div>
        </div>
    )
}
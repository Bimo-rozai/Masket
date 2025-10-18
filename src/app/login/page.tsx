import styles from './login.module.css';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function LoginPage() {
  return (
    <div className={styles.body}>
      <div className={styles.loginContainer}>
        <div className="row g-0">
          {/* Left Panel */}
          <div className={`col-md-6 ${styles.leftPanel}`}>
            <div className={styles.topLeftLogo}>
              <Image src="/logo.svg" alt="Masket Logo" className={styles.logo} width={150} height={150} />
            </div>
            <div className={styles.leftPanelContent}>
              <h2 className={styles.welcomeHeader}>Welcome<br />Back!</h2>
            </div>
          </div>
          {/* Right Panel (Login Form) */}
          <div className={`col-md-6 ${styles.rightPanel}`}>
            <h3 className={styles.loginHeader}>Login</h3>
            <p className="text-muted mb-4">
              Welcome back! please login to your account.
            </p>

            <form>
              <div className="mb-3">
                <div className="input-group">
                  <span className={`input-group-text bg-transparent border-end-0 ${styles.inputGroupText}`}><i className="bi bi-person"></i></span>
                  <input
                    type="email"
                    className={`form-control border-start-0 ${styles.formControl} ${styles.inputGroupFormControl}`}
                    id="usernameEmail"
                    placeholder="Username/Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className={`input-group-text bg-transparent border-end-0 ${styles.inputGroupText}`}><i className="bi bi-lock"></i></span>
                  <input
                    type="password"
                    className={`form-control border-start-0 ${styles.formControl} ${styles.inputGroupFormControl}`}
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className={`form-check-input ${styles.formCheckInput}`}
                    type="checkbox"
                    value=""
                    id="rememberMe"
                  />
                  <label className={`form-check-label ${styles.formCheckLabel}`} htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a href="#" className={`${styles.textPurple} text-decoration-none`}>Forgot password?</a>
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className={`btn ${styles.btnPrimary}`}>LOGIN</button>
              </div>

              <div className="d-grid mb-4">
                <button type="button" className={`btn ${styles.btnGoogle}`}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google Logo"
                    className={styles.googleLogo}
                    width={20}
                    height={20}
                  />
                  Sign in with Google
                </button>
              </div>

              <p className="text-center text-muted">
                Don&apos;t have an account?{' '}
                <a href="#" className={`${styles.textPurple} text-decoration-none fw-bold`}>Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
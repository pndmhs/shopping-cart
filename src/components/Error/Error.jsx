import styles from './Error.module.css'

const Error = ({ message }) => {
  return (
    <div className={styles.error}>
      <h1>Error: {message}</h1>
    </div>
  )
}

export default Error
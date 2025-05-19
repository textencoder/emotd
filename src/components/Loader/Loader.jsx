import styles from "./Loader.module.css"

const Loader = () => {

  return (
    <span className={`${styles.loader} opal`}>
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <circle r="25" cx="25" cy="25" />
</svg>
<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <circle r="25" cx="25" cy="25" />
</svg>
<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <circle r="25" cx="25" cy="25" />
</svg>
      </span>
  )
}

export default Loader;
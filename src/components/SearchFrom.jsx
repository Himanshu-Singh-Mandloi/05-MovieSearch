import { Form } from "react-router-dom"
import styles from "./SearchForm.module.css";



function SearchFrom({searchTerm}) {
  return (
    <Form method="GET"  className={`container ${styles.form}`}>

      <input type="text" name="search" id="search" required  defaultValue={searchTerm}/>
      <button type="submit"> Search </button>
      
    </Form>
  )
}

export default SearchFrom
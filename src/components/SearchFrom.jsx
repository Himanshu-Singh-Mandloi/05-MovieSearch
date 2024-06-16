import { Form } from "react-router-dom"



function SearchFrom({searchTerm}) {
  return (
    <Form method="GET">
      <input type="text" name="search" id="search" required  defaultValue={searchTerm}/>
      <button type="submit"> Search </button>
    </Form>
  )
}

export default SearchFrom
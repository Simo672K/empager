import * as Form from "@radix-ui/react-form";
import { RiSearchLine } from "react-icons/ri";

function Search() {
  return (
    <div className="border-2 flex items-center px-2 py-1 rounded focus-within:border-blue-600 focus-within:w-96 focus-within:transition-all focus-within:duration-500">
      <RiSearchLine className="me-2"/>
      <Form.Root className="flex-grow">
        <Form.Field name="search">
          <Form.Control asChild>
            <input className="outline-none w-full" type="text" placeholder="Search something..."/>
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </div>
  )
}
export default Search
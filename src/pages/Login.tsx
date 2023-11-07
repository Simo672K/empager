import * as Form from '@radix-ui/react-form';

function Login() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Form.Root>
        <Form.Field name='username'>
          <Form.Label className='block'>User</Form.Label>
          <Form.Control asChild>
            <input type="text" placeholder='Enter User'/>
          </Form.Control>
        </Form.Field>
        <Form.Field name='Password'>
          <Form.Label className='block'>Password</Form.Label>
          <Form.Control asChild>
            <input type="password" placeholder='Enter password'/>
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </div>
  )
}
export default Login
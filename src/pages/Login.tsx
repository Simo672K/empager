import * as Form from '@radix-ui/react-form';
import {RxLockClosed, RxPerson, RxEyeClosed} from 'react-icons/rx';
import GroupInput from '../components/Fileds/GroupInput';

function Login() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Form.Root>
        <Form.Field name='username'>
          <Form.Label className='block uppercase text-sm font-semibold ml-4 mb-1'>User</Form.Label>
          <GroupInput>
            <RxPerson className="mr-3"/>
            <Form.Control asChild>
              <input className='outline-0' type="text" placeholder='Enter Your Username'/>
            </Form.Control>
          </GroupInput>
        </Form.Field>
        <Form.Field name='Password' className='mt-4'>
          <Form.Label className='block uppercase text-sm font-semibold ml-4 mb-1'>Password</Form.Label>
          <GroupInput>
            <RxLockClosed className="mr-3"/>
            <Form.Control asChild>
              <input className='outline-0' type="password" placeholder='Enter Your Password'/>
            </Form.Control>
            <RxEyeClosed/>
          </GroupInput>
        </Form.Field>
      </Form.Root>
    </div>
  )
}
export default Login
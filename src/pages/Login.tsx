import { useRef, useState } from 'react';
import * as Form from '@radix-ui/react-form';
import {RxLockClosed, RxPerson, RxEyeClosed, RxEyeOpen} from 'react-icons/rx';
import GroupInput from '../components/Fileds/GroupInput';

function Login() {
  const [showPassword, setShowPassword]= useState(false);
  const passwordRef= useRef<HTMLInputElement>(null);


  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='border-2 px-8 py-12 rounded-lg bg-white'>
        <h2 className='text-2xl text-center pb-10 font-semibold'>Login</h2>
        <Form.Root>
          <Form.Field name='username'>
            <Form.Label className='block uppercase text-sm font-semibold tracking-wider ml-4 mb-2'>User</Form.Label>
            <GroupInput>
              <RxPerson className="mr-3"/>
              <Form.Control asChild>
                <input className='outline-0' type="text" placeholder='Enter Your Username'/>
              </Form.Control>
            </GroupInput>
          </Form.Field>
          <Form.Field name='Password' className='mt-4'>
            <Form.Label className='block uppercase text-sm font-semibold tracking-wider ml-4 mb-2'>Password</Form.Label>
            <GroupInput>
              <RxLockClosed className="mr-3"/>
              <Form.Control asChild>
                <input ref={passwordRef} className='outline-0' type={showPassword? "text" :"password"} placeholder='Enter Your Password'/>
              </Form.Control>
              <button type='button' onClick={()=>{
                setShowPassword(!showPassword);
                passwordRef.current?.focus()
              }}>
                {
                  showPassword?
                  <RxEyeClosed/>:
                  <RxEyeOpen/>
                }
              </button>
            </GroupInput>
          </Form.Field>
          <Form.Submit className='block bg-blue-600 mx-auto mt-6 w-full text-white px-12 py-1 rounded hover:bg-blue-500'>Login</Form.Submit>
        </Form.Root>
      </div>
    </div>
  )
}
export default Login
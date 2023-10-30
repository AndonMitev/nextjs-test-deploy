'use client';

import { object, string, email, minLength, Output } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useForm } from 'react-hook-form';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { registerApi } from '@/app/lib';
const RegisterSchema = object({
  email: string([
    minLength(1, 'Please enter your email.'),
    email('Invalid email.')
  ]),
  name: string([minLength(1, 'Please enter your name.')]),
  password: string([
    minLength(1, 'Please enter your password.'),
    minLength(8, 'Your password must have 8 characters or more.')
  ])
});

type RegisterDataType = Output<typeof RegisterSchema>;

const SignUp = () => {
  const form = useForm<RegisterDataType>({
    resolver: valibotResolver(RegisterSchema),
    defaultValues: {
      email: '',
      name: '',
      password: ''
    }
  });

  const onSubmit = async (values: RegisterDataType) => {
    const res = await registerApi(values);
  };

  return (
    <div>
      <Label>Sign Up</Label>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;

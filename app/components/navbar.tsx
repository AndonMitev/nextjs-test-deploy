'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/app/components';
import { APP_ROUTES } from '@/app/constants';

export function Navbar() {
  return (
    <nav className='bg-blue-800 p-4'>
      <ul className='flex justify-evenly text-2xl font-bold'>
        <li>
          <Link href={APP_ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link href={APP_ROUTES.SIGNIN}>Sign In</Link>
        </li>
        <li>
          <Link href={APP_ROUTES.SIGNUP}>Sign Up</Link>
        </li>
        <li>
          <Link href={APP_ROUTES.SIGNOUT}>Sign Out</Link>
        </li>
        <li>
          <Link href={APP_ROUTES.UPDATE_PASSWORD}>Update Password</Link>
        </li>
        <li>
          <Link href={APP_ROUTES.ABOUT}>About</Link>
        </li>
        <li>
          <Link href={APP_ROUTES.MOVIES}>Movies</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}

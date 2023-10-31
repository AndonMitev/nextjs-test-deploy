'use client';

import { APP_ROUTES } from '@/app/constants';
import { FetchError, updatePasswordApi } from '@/app/lib';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = async () => {
    try {
      await updatePasswordApi({
        oldPassword,
        newPassword,
      });
    } catch (_error) {
      const error = _error as FetchError;

      if (error.status === 401) {
        router.push(APP_ROUTES.SIGNIN);
      }
    }
  };

  return (
    <div>
      <div>
        <label>Old Password</label>
        <input
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div>
        <label>New Password</label>
        <input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button onClick={handlePasswordChange}>Execute</button>
    </div>
  );
};

export default Page;

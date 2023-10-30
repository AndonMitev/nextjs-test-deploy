'use client';

import { registerApi, updatePasswordApi } from '@/app/lib';
import { useState } from 'react';

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState('register_password_123456');
  const [newPassword, setNewPassword] = useState('register_password_1234567');

  const handlePasswordChange = async () => {
    await updatePasswordApi({ newPassword, oldPassword });
  };

  const handleRegister = async () => {
    await registerApi({
      email: 'testfdfd@abv.bg',
      name: 'ndsndnsadsa',
      password: 'iewjqiejwiewqewq'
    });
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
      <button onClick={handleRegister}>Execute</button>
    </div>
  );
};

export default UpdatePassword;

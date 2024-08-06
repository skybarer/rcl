import React, { useState } from 'react';
import OTPChecker from './OTPChecker';

export default {
  title: 'OTPChecker',
  component: OTPChecker,
};

const Template = (args) => {
  const [otp, setOtp] = useState('');

  return (
    <div>
      <OTPChecker {...args} onOTPChange={(newOtp) => setOtp(newOtp)} />
      <p>Entered OTP: {otp}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  length: 6, // Number of OTP digits
};

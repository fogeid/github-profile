import { useState } from 'react';
import Logo from '../../components/Logo';
import Select from '../../components/Select';
import ProfileDetails from '../../components/ProfileDetails';

function Profile() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Logo />
      <Select />
    </>
  );
}

export default Profile;

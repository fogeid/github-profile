import Logo from '../../components/Logo';
import Select from '../../components/Select';
import ProfileDetails from '../../components/ProfileDetails';
import Footer from '../../components/Footer';

import { ProfileWrapper } from './styles.js';

function Profile() {

  return (
    <>
      <ProfileWrapper>
        <Logo />
        <Select />
        <ProfileDetails />
        <Footer />
      </ProfileWrapper>
    </>
  );
}

export default Profile;

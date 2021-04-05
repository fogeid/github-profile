import Logo from '../../components/Logo';
import Select from '../../components/Select';
import ProfileDetails from '../../components/ProfileDetails';
import Footer from '../../components/Footer';

import { ProfileWrapper } from './styles.js';

function Profile() {

  return (
    <>
      <ProfileWrapper>
        <Logo className="x-logo" />
        <Select className="x-select" />
        <ProfileDetails className="x-profile" />
        <Footer />
      </ProfileWrapper>
    </>
  );
}

export default Profile;

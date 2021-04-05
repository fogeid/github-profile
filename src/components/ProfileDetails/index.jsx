import { useContext } from "react";
import { UserContext } from '../../UserContext';
import { FaBriefcase, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

import { Section } from './styles';


function ProfileDetails() {
  const { data } = useContext(UserContext);

  if (data === null) {
    return null;
  } else {
    return (
      <Section>
        <Section.Img src={data.avatar_url} alt="Profile" />
            <Section.Link href={data.html_url} target="_new">
              <Section.H1>{data.name}</Section.H1>
            </Section.Link>
            <Section.P>{data.bio}</Section.P>
            <Section.Div>
              <div>
                <FaMapMarkerAlt />
                <p>{data.location}</p>
              </div>
  
              <div>
                <FaBriefcase />
                <p>{data.company}</p>
              </div>
  
              <div>
                <FaGlobe />
                <a href={data.blog} target="_new">{data.blog}</a>
              </div>
            </Section.Div>
  
            <Section.DivCards>
              <div>Repositories: {data.public_repos}</div>
              <div>Followers: {data.followers}</div>
              <div>Following: {data.following}</div>
            </Section.DivCards>
      </Section>
    );
  };  
}

export default ProfileDetails;
import '../styles/components/_profile-image.scss';

const ProfileImage = () => {
  return (
    <div className="image">
      <img src={require('../assets/images/userPhoto.jpeg')} alt="profile-img" />
      <div className="image__movable-border">
        <span />
      </div>
    </div>
  );
};
export default ProfileImage;

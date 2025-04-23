import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  user: {
    avatar_url: string;
    name: string;
    bio: string;
  };
}

function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <img src={user.avatar_url} alt="Avatar do usuário" className={styles.avatar} />
      <div className={styles.cardtwo}>
        <h2 className={styles.name}>{user.name ? user.name : 'Nome não disponível'}</h2>
        <p className={styles.bio}>{user.bio ? user.bio : 'Bio não disponível'}</p>
      </div>
    </div>
  );
}

export default ProfileCard;



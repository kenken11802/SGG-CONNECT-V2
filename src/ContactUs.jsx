
const ProgrammerInfo = () => {
  const members = [
    {
      name: 'Ivan Brogoli',
      contact: '09623456082',
      email: 'ivanbrigoli@gmail.com',
      image: '1.jpg',
    },
    {
      name: 'Lordjie Lapas',
      contact: '09724560982',
      email: 'lordjielapas@gmail.com',
      image: '1.jpg',
    },
    {
      name: 'Khent Lapina',
      contact: '09346781234',
      email: 'khentlapina@gmail.com',
      image: '1.jpg',
    },
    {
      name: 'Jommel Baroca',
      contact: '09643567824',
      email: 'jommelbaroca@gmail.com',
      image: '1.jpg',
    },
    {
      name: 'Airiz Alcazren',
      contact: '09872455678',
      email: 'airiz@gmail.com',
      image: '1.jpg',
    },

  ];

  return (
    <div style={styles.body}>
      <h1 style={styles.title}></h1>
      <div style={styles.memberContainer}>
        {members.map((member, index) => (
          <div key={index} style={styles.member}>
            <img
              src={member.image}  
              alt={`Member ${index + 1}`}
              style={styles.memberImage}
            />
            <h2 style={styles.memberName}>{member.name}</h2>
            <p style={styles.memberDetails}>Contact: {member.contact}</p>
            <p style={styles.memberDetails}>Email Address: {member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'rgb(56, 56, 219)',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: 0,
    height: '100vh',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  memberContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  member: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  memberName: {
    margin: '10px 0 5px',
    fontSize: '20px',
  },
  memberDetails: {
    margin: '5px 0',
  },
};

export default ProgrammerInfo;

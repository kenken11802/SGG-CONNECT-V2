
const ProgrammerInfo = () => {
  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h1>SlapSoil</h1>

      <div className="member-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="1.png" alt="Member 1" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Jaylord Manila</h2>
          <p>Contact: 09123456789</p>
          <p>Email Address: jaylordmanila@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="2.png" alt="Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Ariel Mosqueda</h2>
          <p>Contact: 09123475843</p>
          <p>Email Address: ayeahmosqueda@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="3.png" alt="Member 3" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Ron Ryan Lataza</h2>
          <p>Contact: 09123475843</p>
          <p>Email Address: ronryan.lataza@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="4.png" alt="Member 4" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Jade Anthony Ortega</h2>
          <p>Contact: 09123475843</p>
          <p>Email Address: jadeortega@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="5.png" alt="Member 5" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Chesty Clint De Leon</h2>
          <p>Contact: 09123475843</p>
          <p>Email Address: chesty@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="6.png" alt="Member 6" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Crislyn Tanudtanud</h2>
          <p>Contact: 09123475843</p>
          <p>Email Address: crislyn@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammerInfo;

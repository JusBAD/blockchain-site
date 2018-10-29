function getTeam() {
  return [
    {
      name: 'Sach Samala',
      title: 'President',
      linkedinURL: 'https://www.linkedin.com/in/sach-samala/',
      avatarURL: '../img/2018/sach_samala.jpeg'
    },
    {
      name: 'Mohammad Sadoghi',
      title: 'Professor/Advisor',
      linkedinURL: 'https://www.linkedin.com/in/mohammad-sadoghi-b842a27/',
      avatarURL: '../img/2018/mohammad_sadoghi.jpeg'
    },
    {
      name: 'John Long',
      title: 'Head Intructor',
      linkedinURL:
        'https://www.linkedin.com/in/jzl/?fbclid=IwAR2vdzuhHj5HsrOCW6MCxgSb2ew8JtFaS6wDV0yiKp9tgXL1wFq6MLpY5RE/',
      avatarURL: '../img/2018/john_long.jpeg'
    },
    {
      name: 'Ana Mehta',
      title: 'Head of Marketing',
      linkedinURL: 'https://www.linkedin.com/in/ana-mehta-630a52121/',
      avatarURL: '../img/2018/ana_mehta.jpeg'
    },
    {
      name: 'Samarth Sandeep',
      title: 'Chief Technology Officer',
      linkedinURL: 'https://www.linkedin.com/in/samarth-sandeep-81a02487/',
      avatarURL: '../img/2018/samarth_sandeep.jpeg'
    },
    {
      name: 'Andreas Godderis',
      title: 'Head of Operations Outreach',
      linkedinURL: 'https://www.linkedin.com/in/andreas-g-601262119/',
      avatarURL: '../img/2018/andreas_godderis.jpeg'
    }
  ];
}

function Member({ name, title, linkedinURL, avatarURL }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1em',
        width: '18rem',
        margin: '.5rem',
        height: '20rem'
      }}>
      <img
        style={{ borderRadius: '100%', width: 139, height: 139 }}
        src={avatarURL}
        alt={`${name}'s picture`}
        className="card-img-top shadow"
      />
      <div className="card-body" style={{ textAlign: 'center' }}>
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle">{title}</h6>
        <a
          className="btn btn-default"
          href={linkedinURL}
          target="_BLANK"
          rel="noreferrer noopener">
          Contact
        </a>
      </div>
    </div>
  );
}

function Team(props) {
  return (
    <div
      className="hero-background"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em 0'
      }}>
      <h2 style={{ fontSize: '3em', margin: '1em 0' }}>Team</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '0 1em'
        }}>
        {getTeam().map(member => (
          <Member key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

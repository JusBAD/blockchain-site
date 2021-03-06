'use strict';

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

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
      title: 'Head Instructor',
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

function Member(_ref) {
  var name = _ref.name,
    title = _ref.title,
    linkedinURL = _ref.linkedinURL,
    avatarURL = _ref.avatarURL;

  return React.createElement(
    'div',
    {
      className: 'card',
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1em',
        width: '18rem',
        margin: '.5rem',
        height: '20rem'
      }
    },
    React.createElement('img', {
      style: { borderRadius: '100%', width: 139, height: 139 },
      src: avatarURL,
      alt: name + "'s picture",
      className: 'card-img-top shadow'
    }),
    React.createElement(
      'div',
      { className: 'card-body', style: { textAlign: 'center' } },
      React.createElement('h5', { className: 'card-title' }, name),
      React.createElement('h6', { className: 'card-subtitle' }, title),
      React.createElement(
        'a',
        {
          className: 'btn btn-default',
          href: linkedinURL,
          target: '_BLANK',
          rel: 'noreferrer noopener'
        },
        'Contact'
      )
    )
  );
}

function Team(props) {
  return React.createElement(
    'div',
    {
      className: 'hero-background',
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em 0'
      }
    },
    React.createElement(
      'h2',
      { style: { fontSize: '3em', margin: '1em 0' } },
      'Team'
    ),
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '0 1em',
          maxWidth: '1100px',
          width: '100%'
        }
      },
      getTeam().map(function(member) {
        return React.createElement(
          Member,
          _extends({ key: member.name }, member)
        );
      })
    )
  );
}

function EmailForm(props) {
  return React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: '0 .5em'
      }
    },
    React.createElement(
      'form',
      { method: 'POST', action: 'https://formspree.io/ssamala@ucdavis.edu' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'label',
            { htmlFor: 'email-address' },
            'Email address: '
          ),
          React.createElement('input', {
            required: true,
            type: 'email',
            name: 'email',
            className: 'form-control',
            placeholder: 'Your email',
            'aria-describedby': 'email address'
          })
        ),
        React.createElement(
          'button',
          {
            type: 'submit',
            className: 'btn btn-default',
            style: { width: '100%', margin: '.5em 0' }
          },
          'Sign up'
        )
      )
    )
  );
}
// Dont delete below!

const rootTeam = document.getElementById('team');
ReactDOM.render(React.createElement(Team), rootTeam);

const rootSignUp = document.getElementById('signup');
ReactDOM.render(React.createElement(EmailForm), rootSignUp);

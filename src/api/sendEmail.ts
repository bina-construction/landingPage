const BASE_URL = "/.netlify/functions/sendMail";

const sendEmailFromEmailJS = async (
  body: { [value: string]: string | undefined | any },
  forWho: "us" | "user"
) => {
  const { REACT_APP_MAILER_SEND_TEMPLATE_ID } = process.env;

  const data = {
    from: {
      email: "contact@njgconnect.fr",
    },
    to: [
      {
        email: forWho === "us" ? "jeremynohile@gmail.com" : body.mail,
      },
    ],
    variables: [
      {
        email: forWho === "us" ? "jeremynohile@gmail.com" : body.mail,
        substitutions: [
          {
            var: "info",
            value:
              forWho === "us"
                ? selectMessageForEmailForUs(body)
                : selectMessageForEmailForUser(),
          },
        ],
      },
    ],
    subject:
      forWho === "us"
        ? `Nouvelle demande de prise de contact 😁`
        : `Votre demande de prise de contact`,
    template_id: REACT_APP_MAILER_SEND_TEMPLATE_ID,
  };

  const responseFetch = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: body ? JSON.stringify(data) : null,
  });
  let response = {};
  try {
    const responseJson = await responseFetch.json();
    response = { succes: true, data: responseJson };
  } catch (error) {
    response = { succes: false, data: error };
  }
  return response;
};

function selectMessageForEmailForUs(info: {
  [value: string]: string | undefined | any;
}) {
  return `
    Vous avez reçu une nouvelle demande de contact avec :  <br /> <br />
    
    Monsieur, Madame :  ${info.name}  <br /> <br />

    Téléphone : ${info.phone}  <br /> <br />
    `;
}

function selectMessageForEmailForUser() {
  return `Nous avons bien reçu votre demande de prise de contact.<br />
    Nous vous remercions de l'intérêt que vous nous portez et ne manquerons pas de revenir vers vous dans les plus bref délai   <br /> <br />
    -------------
  `;
}

export default sendEmailFromEmailJS;

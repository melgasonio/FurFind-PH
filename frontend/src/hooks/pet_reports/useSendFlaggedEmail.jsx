export const useSendFlaggedEmail = () => {

    const sendEmail = async ({ name, status, id, breed }) => {
      try {
          await fetch('http://localhost:5000/api/emailflagged/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                emailReceiver: 'soniomelga@gmail.com',
                subject: 'Your pet report post has been taken down.',
                body: `
                  Your pet report with the following information has been found to be inappropriate and has been take down.
                  
                  Pet Name: ${capitalize(name)}, ID: ${id}
                  Status: ${capitalize(status)}
                  Breed: ${capitalize(breed)}
                `,
              })
            });
      } catch (error) {
          console.log("Error sending email notification:", error);
      }
    }

    const capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return { sendEmail };
}
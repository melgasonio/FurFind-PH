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
                  `,
                })
              });

            console.log('Successful')
        } catch (error) {
            console.log(error);
        }
    }

    return { sendEmail };
}
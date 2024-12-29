export const useSendFlaggedEmail = () => {

    const sendEmail = async () => {
        try {
            await fetch('http://localhost:5000/api/emailflagged/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  emailReceiver: 'soniomelga@gmail.com',
                  subject: 'Test Email Flagged',
                  body: `
                    Hello. This is a test only.
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
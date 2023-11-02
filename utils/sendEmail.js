import axios from 'axios';

const sendEmail = async (name, email, message) => {
    return axios({
        method: 'post',
        url: './mailApi',
        data: {
            name: name,
            email: email,
            message: message,
        },
    });
};

export default sendEmail;
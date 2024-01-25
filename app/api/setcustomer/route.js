import Cookies from 'cookies';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { user } = req.body;

        const cookies = new Cookies(req, res);
        cookies.set('user', JSON.stringify(user), { httpOnly: true });

        res.status(200).json({ message: 'User set successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
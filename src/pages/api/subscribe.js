export default (req, res) => {
    console.log({ req });
    const { email } = req.query;
    console.log(email);
}
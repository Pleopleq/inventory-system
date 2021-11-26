import app from './app'

app.listen(process.env.SERVER_PORT, async () => {
  console.log(`Server runinng on port ${process.env.SERVER_PORT}`);
});

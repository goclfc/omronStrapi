module.exports = ({ env }) => ({
    url: env("https://omrongeocms.herokuapp.com/"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
    },
  });
import admin from "firebase-admin";
// import serviceAccount from "./serviceAccount.json";

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "speedy-rite-401115",
    private_key_id: "7218976730c8499cdf90dae62fa126cfed57cc1a",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuZQFJJl3OF4YQ\nokDeJ96op++x+ti/OAMvcwFhdpthF3TN+dLONGZKrBAVcKORNxVBbUXX+WhzrwdU\n/2ERQpYiIbjfyl/G6utZI+PchV1PAx4lcESftm2RY0xXl8WKZVYnG8x39VEf0Rlf\nBhMz5Y8znTl9syDl0XIxke7JEkTHw9zbtuuY0HoYVtGRQFM7Dkj7acm8hXU5LPR0\nw4LHLy2hs7rf+3s93X8yuPJSSVbzJyATqmPJvbFF+HwCFkYe6fqWBk1viHvgmgeE\nH+flzEE8D9FRwUpXY860iFS+7vIXlwr4GF30mO4giaKCW9nNwzvWofXjjKnjxhT0\np8l0lwNtAgMBAAECggEADVdJvWRTecAf7+bRqo0HQgSy1/02Fo6846TbHq8ZnNhU\nBavOXhrxFlZKVrGKucGqfRpUZPy96leh6nUs4kqjPJIy19/d6tQu099kf4quRCyb\nYkbP4R3uDNi5Ttwb7wXojM5aGnUoUxRGahgHYQl3Jn4pFz4cTqhyoWsmBrjAjT2E\nrtil73dRYOhSdFMOzwm/WavmeUhX7idg5LO8nMU5YPnReGqI2pPp+dPfafs9hgCQ\nMSEfHDUu2TzLcTwnXX7liids4XECcPZzIGcj9cAsvC14v/WhOcQ9urwAG+WB89LI\nKF2SRz84xY3C+frfL6pftPq2AL92M8ne1/YrDN0AwQKBgQDbHzzGPJs9jmVQbY4F\nXD3DveVpFxjgYRdfrDcsOKD0j7PuJcLH5gwL+cXOS7kDbd7rLJOXmzQ0UFh5PoK7\nFsEZisCpsfbjRKQRxclTA6p4wE5XiS9WtUaUCx//3jF2W2tB8p7fz+jlbvO1YtPu\n2xGP2Ow+p2Mrtl27/dZDDu9cYQKBgQDLvrT7DKPlY8orCow7BgcCbFqTZIIKzDjc\n2n1pcxEjfIE4LPu+fo+GsLlGZd0FdbQkX884xi03SgyIv96S40eKQufwVytTHXW9\nBWCl1211O/FtQFEk9u4ZWE8j8Kpk0Rg0MXp7KlsDugJa64Gg7np0ZFLIpjhNrlx+\nje+tM+RijQKBgGODHTOeJJZhC8vp5Ry0FmzF2eDPF4IXNelCKdBQa3CFrp5R0dK8\nu+3YYifdJcnT5PACz4iDeMLlVjjB1dcnb0ytQfAPHWN7MdPMcjDcMlgiZbHFYJVN\nQB9NqhumieoJfH13tQVJw6gmqlFO75bDMIeWaTvPAu/AI3OTxPGxX60hAoGBAIvK\nI9gfmw/XAK25Re91Ojfyac645fRMnDMDgYppFXg4g1wsmOjhYs4x0Fy5pQSK9ncC\neWXlqr5FgwYMRsSXRc1aDFK9LA+RpedzmhUPEp2d7A5eU44+Eay4B0yMYgxb3fRp\ngjShIeMTq2wAK2dkWAYlkxrx2K2LlRCLh8dZVDg9AoGAVQjUSs/do5wiBrG6nUz/\nAxh34qgrJj+p+NamKV8P+ceLsgvbx0sJsgt1A1DWb9A1LM015O1LVhcpR8B/eQNI\ncDyiRRpW5a12qWyLuiK41nCXZFAsHzAvV8LFWEf6wdjKxmhTnJKhiwhwLH6Z3HNW\n1UzZW2ISOO3b1YRGH16n4n8=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-vz75l@speedy-rite-401115.iam.gserviceaccount.com",
    client_id: "100341787028344754148",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vz75l%40speedy-rite-401115.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  }),
});

export default admin;
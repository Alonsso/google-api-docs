const { google } = require("googleapis");
const token = require("../token.json");
const credentials = require("../credentials.json");

function authorize() {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}

async function main(YOUR_DOCUMENT_ID) {
    const auth = await authorize();
    const docs = google.docs({
      version: "v1",
      auth
    });
    await docs.documents.batchUpdate({
      auth,
      documentId: YOUR_DOCUMENT_ID,
      requestBody: {
        requests: [
          {
            insertText: {
              location: {
                index: 2
              },
              text: "hello!aosdjalsdkj\n"
            }
          }
        ]
      }
    });
}

main("1p67Z9huwJwVufftgCPYfr1L0sFWfWj3DFULxtUEO_IE");
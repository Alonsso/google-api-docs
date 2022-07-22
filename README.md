# google-api-docs
This repo contains a script built to write inside a google document

## NOTE
1. First configure a project inside GCP console.
2. Create desktop application credentials using client ID OAuth 2.0 in Google console.
3. Save credentials JSON as **credentials.json** in root directory.
4. Run `node src/index.js` first time and get authorization code from URL provided by localhost as declared in redirect_uris inside credentials.json.
5. The above generates a **token.json** file, now you can create your own scripts to write inside docs.
  1. Check `writeToDoc` example.
  2. Replace main function parameter for the google document ID you want to edit.

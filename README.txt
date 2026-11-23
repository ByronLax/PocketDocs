Print Ready Docs (installable web app)

1. Upload ALL files in this folder to any free static host:
   - Netlify: go to app.netlify.com/drop and drag the folder in.
   - Cloudflare Pages, GitHub Pages or Vercel also work.
2. Open the https:// link it gives you (HTTPS is required for install).
3. Phone: Chrome menu > Install app / Add to Home screen. iPhone: Safari Share > Add to Home Screen.
   PC: Chrome or Edge address bar > Install icon.
After the first visit it works offline.

ADDING DOWNLOAD FILES (Android, Windows, Mac, Linux, iPhone)
The "Get the app" box on the site reads downloads.js. Until you add a link, each platform shows "Coming soon".
1. Create the file (see below) and put it in this folder next to index.html, or host it elsewhere.
2. Edit downloads.js and put the file name or full link next to that platform.
3. Upload the folder to Netlify again (Deploys tab). The download button appears; no other change is needed.

How to create the files (these need to be done on your side; they are not included here):
- Android APK: pwabuilder.com, enter your site link, choose the Android package, and download the result.
- Windows and Mac: pwabuilder.com also offers packages for these. Alternatively wrap the site with Electron or Tauri on a computer.
- Linux: wrap the site with Electron or Tauri and build an AppImage.
- iPhone and iPad: there is no direct file download. Use Safari > Share > Add to Home Screen, or publish in the App Store (needs a paid Apple developer account).
Installing straight from the browser (the "Install this app" button) works on Android, Windows, Mac and Linux with Chrome or Edge.

FILE FORMATS
You can choose PDF, JPG, PNG or Word (.docx) before creating. JPG and PNG give one image per page (several pages come as a .zip).
The Word file has each page as a picture at its real size, so the text inside cannot be edited.

MENU PAGES
The side menu has Home, My documents, Profile, Settings, Help and support, and Get the app.
To show an "Email support" button on the Help page, put your email in downloads.js (supportEmail).

UPDATING THE APP
Upload the new folder to your host (for example Netlify Deploys). Open the app, go to Settings > App updates > Check for updates, then tap Update now.
The app also checks by itself when you open it, and shows "A new version is ready" with an Update button.
Updates only work when the app is opened from its website address.

IF THE INSTALLED APP STILL SHOWS AN OLD VERSION
1. Open your site address followed by /reset.html in a normal browser tab. It clears the old copy and opens the newest one. Saved documents and your profile are kept.
2. Or open the app from the menu: Check for updates.
3. If the app has no address bar, remove it and install it again from your site address.

GOOGLE SIGN-IN & DRIVE BACKUP
By default, profiles and My documents are saved locally on the device.
To enable live Google Sign-In and automatic Google Drive backup across devices:
1. In Google Cloud Console, enable the Google Drive API and create an OAuth 2.0 Web Client ID.
2. Add your hosted https:// site URL to Authorized JavaScript origins and Authorized redirect URIs.
3. Paste that Client ID into downloads.js (window.APPCFG.auth.googleClientId) and re-upload.

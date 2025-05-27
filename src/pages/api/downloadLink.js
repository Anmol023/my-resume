import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

export default async function handler(req, res) {
  const folderId = process.env.FOLDER_ID

  try {
    const drive = google.drive({ version: 'v3', auth });

    const list = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: 'files(id, name, mimeType)',
    });

    if (!list.data.files.length) {
      return res.status(404).json({ error: 'No files found in folder' });
    }

    const file = list.data.files[0]
    const { id: fileId, name, mimeType } = file

    let stream;
    let downloadName = name;

    if (mimeType === 'application/vnd.google-apps.document') {
      stream = await drive.files.export(
        { fileId, mimeType: 'application/pdf' },
        { responseType: 'stream' }
      );
      downloadName += '.pdf'
    } else if (mimeType === 'application/vnd.google-apps.spreadsheet') {

      stream = await drive.files.export(
        {
          fileId,
          mimeType:
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
        { responseType: 'stream' }
      );
      downloadName += '.xlsx'
    } else if (mimeType === 'application/vnd.google-apps.presentation') {
     
      stream = await drive.files.export(
        { fileId, mimeType: 'application/pdf' },
        { responseType: 'stream' }
      );
      downloadName += '.pdf'
    } else {
      //direct
      stream = await drive.files.get(
        { fileId, alt: 'media' },
        { responseType: 'stream' }
      );
      
    }

    res.setHeader('Content-Disposition', `attachment; filename="${downloadName}"`)
    res.setHeader('Content-Type', 'application/octet-stream')

    stream.data.pipe(res)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: err.message })
  }
}
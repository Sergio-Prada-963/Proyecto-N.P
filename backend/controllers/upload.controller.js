import path from 'path';
import { response } from 'express';
import { fileURLToPath } from 'url';

const uploadFile = async(req, res = response) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    //console.log(req.files);

    if (!req.files || Object.keys(req.files).length === 0 ||!req.files.file) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      const {file} = req.files;
      const uploadPath = path.join (__dirname, '../img/', file.name);
    
      // Use the mv() method to place the file somewhere on your server
      file.mv(uploadPath, (err) =>{
        if (err){
            return res.status(500).send(err);
        }
          
        res.json({ msg:'File uploaded!' + uploadPath});
      });

}

export default uploadFile;
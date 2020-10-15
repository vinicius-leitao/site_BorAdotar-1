//importação de modulos
require("dotenv").config()

const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")

aws.config.update({ //configuração do aws
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region:'sa-east-1'
})

const s3 = new aws.S3() //incialização do objeto

//configuração do upload
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'boradotar',
        acl: "public-read",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function(req, file, cb){
            let filename = Date.now() + file.originalname //nome com que o arquivo será salvo no aws
            cb(null, filename)
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024, //tamanho máximo que uma foto pode ter ao ser mandada pro aws
    },
    fileFilter: (req, file, cb) =>{ //formatos aceitos
        const allowedTypes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png"
        ]
        if(allowedTypes.includes(file.mimetype)){
            cb(null, true)
        } else {
            cb(new Error("formato inválido"))
        }
    }
})

module.exports = upload
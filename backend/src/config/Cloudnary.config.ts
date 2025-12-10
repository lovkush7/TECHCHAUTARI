import {v2 as cloudinary } from "cloudinary"
import Envconfig from "./Envconfig.ts"

cloudinary.config({
    cloud_name: Envconfig.CLOUD_NAME!,
    api_key: Envconfig.CLOUD_API_KEY!,
    api_secret: Envconfig.CLOUD_API_SECRET!,
    secure: true

})
export default cloudinary;
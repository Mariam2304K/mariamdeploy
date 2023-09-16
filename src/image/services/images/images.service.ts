import { Image } from './../../../models/image.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImagesService {

    async createImgSite(image_site: string, description_site: string, id_rapport: number) {

        const img = new Image();
        img.image_site= image_site,
        img.description_site= description_site,
        img.id_rapport= id_rapport,

        console.log(img);
        return await img.save()


         }
}

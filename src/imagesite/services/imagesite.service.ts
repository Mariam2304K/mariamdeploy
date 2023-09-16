import { Image } from '../../models/image.model';
import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class ImagesiteService {

    // inserer les image du site
    async createImgSite(image_site: string, description_site: string, id_rapport: number) {

        const img = new Image();
        img.image_site= image_site;
        img.description_site= description_site;
        img.id_rapport= id_rapport;
        return await img.save()
    }

    //metre à jour les images
    async updateImgSite(image_site: string, description_site: string, id_rapport:any, id_image:any) {

        const img = await Image.findOne({where:{id:id_image, id_rapport:id_rapport }});
        if(img){
            img.image_site= image_site;
            img.description_site= description_site;
            return await img.save()
        }else{
            throw NotFoundException;
        }
    }
    // retrouver toutes les images d'un site donné
    async findImgSite( id_rapport:any) {

        const img = await Image.findAll({where:{id_rapport:id_rapport}});
        if(img){
            return img;
        }else{
            throw NotFoundException;
        }
    }
}

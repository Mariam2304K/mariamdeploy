import { Annexe } from '../../../models/annexe.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnnexeService {

    async createAnnexeImg(image_annexe: string, id_rapport: number) {

        const img = new Annexe();
        img.image_annexe= image_annexe,
        img.id_rapport= id_rapport,
        console.log(img);
        return await img.save()

         }

}

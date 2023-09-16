import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { SiteService } from 'src/site/services/site/site.service';

@Controller('site')
export class SiteController {

    constructor(private sity : SiteService ){}


    @Post('site')
   //creer un site pour un rapport donnné
      async createsite(
  
              @Body('typenv') typenv: string,
              @Body('nomsite') nomsite: string,
              @Body('situationgeo') situationgeo: string,
              @Body('densite') densite: string,
              @Body('typologie') typologie: string,
              @Body('station') station: string,
              @Body('localtec') localtec: string,
              @Body('plaqueident') plaqueident: string,
              @Body('datemiseservice') datemiseservice: Date,
              @Body('hauteurbatiment') hauteurbatiment: string,
              @Body('latitude') latitude: string,
              @Body('longitude') longitude: string,
              @Body('altitude') altitude: string,
              @Body('vigile') vigile: string,
              @Body('nbrevigile') nbrevigile: number,
              @Body('societegardiennagevigile') societegardiennagevigile: string,
              @Body('typstation') typstation: string,
              @Body('observation') observation: string,
              @Body('nom_commune') nom_commune: string,
              @Body('nom_departement') nom_departement: string,
              @Body('nom_region') nom_region: string,
              @Body('nom_ville_quartier') nom_ville_quartier: string,
              @Body('id_rapport') id_rapport: number){
    
                 await this.sity.createSite(typenv, nomsite, situationgeo, densite, typologie, station, localtec, plaqueident, datemiseservice, hauteurbatiment, latitude, longitude, altitude, vigile, nbrevigile, societegardiennagevigile, typstation, observation,
                  nom_commune, nom_departement, nom_region, nom_ville_quartier, id_rapport)

               }
@Post('updatesite')
      //Mise à jourdu des infos du site
      async updatesite(
  
              @Body('typenv') typenv: string,
              @Body('nomsite') nomsite: string,
              @Body('situationgeo') situationgeo: string,
              @Body('densite') densite: string,
              @Body('typologie') typologie: string,
              @Body('station') station: string,
              @Body('localtec') localtec: string,
              @Body('plaqueident') plaqueident: string,
              @Body('datemiseservice') datemiseservice: Date,
              @Body('hauteurbatiment') hauteurbatiment: string,
              @Body('latitude') latitude: string,
              @Body('longitude') longitude: string,
              @Body('altitude') altitude: string,
              @Body('vigile') vigile: string,
              @Body('nbrevigile') nbrevigile: number,
              @Body('societegardiennagevigile') societegardiennagevigile: string,
              @Body('typstation') typstation: string,
              @Body('observation') observation: string,
              @Body('nom_commune') nom_commune: string,
              @Body('nom_departement') nom_departement: string,
              @Body('nom_region') nom_region: string,
              @Body('nom_ville_quartier') nom_ville_quartier: string,
              @Body('id_rapport') id_rapport: number){
    
                 await this.sity.updateSite(typenv, nomsite, situationgeo, densite, typologie, station, localtec, plaqueident, datemiseservice, hauteurbatiment, latitude, longitude, altitude, vigile, nbrevigile, societegardiennagevigile, typstation, observation,
                  nom_commune, nom_departement, nom_region, nom_ville_quartier, id_rapport)

               }
@Get('updatesite/:id_site')

   async findSite(@Param('id_site') id_site){

         const Site= await this.sity.findSite(id_site);
         return Site;
}
}

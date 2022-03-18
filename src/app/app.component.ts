import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-gallery';
  picsArray:string[] = ['./assets/images/beach1.jpg','./assets/images/beach2.jpg','./assets/images/beach3.jpeg','./assets/images/beach4.jpeg'];
  indexOfImage:number = 0;
  
  nextImage():void{
    if(this.indexOfImage<this.picsArray.length-1){
      this.indexOfImage = this.indexOfImage + 1;
       } else {
         this.indexOfImage = 0;
       }
       if(this.indexOfIntro<this.introArray.length-1){
        this.indexOfIntro = this.indexOfIntro + 1;
         } else {
           this.indexOfIntro = 0;
         }
  };

  previousImage():void{
    if(this.indexOfImage>0){
      this.indexOfImage = this.indexOfImage-1;
       } else {
         this.indexOfImage = 3;
       }
    if(this.indexOfIntro>0){
        this.indexOfIntro = this.indexOfIntro-1;
         } else {
           this.indexOfIntro = 3;
         }
  };

  introArray:string[] = ['in cali','in texas','in florida','in cincinati'];
  indexOfIntro:number = 0;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ButtonStyle {
  buttonBgHover: string;
  menuBgColor: string;
  titleColor: string;
  borderIconLabelColor: string;
  borderIconLabelColorHover: string;
  buttonBg: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 

  res: any;
  buttonOne: string = '';
  buttonTwo: string = '';
  transition: string = 'background-color 0.3s, color 0.3s';
  style!: ButtonStyle;
  response: any;

//clinicOne & clinicTwo should be responses from back-end, this is just dummy data

  clinicOne = {
    colors: {
      menuBgColor: "#ffffff",
      titleColor: "#2d3436",
      borderIconLabelColor: "#0447C3",
      borderIconLabelColorHover :"#fff",
      buttonBg : "#fff",
      buttonBgHover : "#0447C3"
    }
  };

  clinicTwo = {
    colors: {
    menuBgColor: "#009688",
    titleColor: "#ffffff",
		borderIconLabelColor: "#009688",
		borderIconLabelColorHover :"#ffffff",
		buttonBg : "#ffffff",
		buttonBgHover : "#00bfa5"
    }
  };

  ngOnInit() {
    this.getDummyData();
  }
 
  getDummyData() {
    this.res = this.clinicTwo;
    this.style = {
      buttonBgHover: this.clinicTwo.colors.buttonBgHover,
      menuBgColor: this.clinicTwo.colors.menuBgColor,
      titleColor: this.clinicTwo.colors.titleColor,
      borderIconLabelColor: this.clinicTwo.colors.borderIconLabelColor,
      borderIconLabelColorHover: this.clinicTwo.colors.borderIconLabelColorHover,
      buttonBg: this.clinicTwo.colors.buttonBg,
    };
  }
}

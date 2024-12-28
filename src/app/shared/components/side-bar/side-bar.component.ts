import { query } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,

  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  mainMenu: { defaultOptions: Array<any>, accessLink: Array<any> } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Your library',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Create playlist',
        icon: 'uil-plus-square'
      },
      {
        name: 'Songs you love',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'My Playlist º 1',
        router: ['/']
      },
      {
        name: 'My Playlist º 2',
        router: ['/']
      },
      {
        name: 'My Playlist º 3',
        router: ['/']
      },
      {
        name: 'My Playlist º 4',
        router: ['/']
      }
    ]
  }
}

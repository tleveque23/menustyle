import { Component, OnInit, NgZone, ViewChild } from '@angular/core';

import { Dropdown, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ask-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  userLabel: string;
  items: MenuItem[];

  public displayAbout: boolean = false;
  public version: string;
  public releaseTimestamp: string;
  public buildNumber: string;

  @ViewChild('testPlanList') testPlanList: Dropdown;

  constructor() { }


  ngOnInit() {

    let userProfile = JSON.parse(window.sessionStorage.getItem("userProfile"));
    if ( userProfile.firstName != null ) {
      this.userLabel = userProfile.firstName + ' (' + userProfile.username + ')';
    }
    else {
      this.userLabel = userProfile.username;
    }

    this.initMenuItems();
  }

  private initMenuItems() {
    this.items = [
      {
        label: 'Editor', icon: 'fa-edit', command: () => {
          this.navigate('editor/projects');
        },
        // visible: this.router.url.indexOf('editor') < 0
      },
      {
        label: 'Execution', icon: 'fa-gear', command: () => {
          this.navigate('execution');
        },
        // visible: this.router.url.indexOf('execution') < 0
      },
      {
        label: 'Dashboard', icon: 'fa-pie-chart', command: () => {
          this.navigate('dashboard');
        },
        // visible: this.router.url.indexOf('dashboard') < 0
      },
      {separator: true},
      {
        label: 'User profile', icon: 'fa-user-circle', command: () => {
          this.openUserProfile();
        }
      },
      {separator: true},
      {
        label: 'About', icon: 'fa fa-info-circle', command: () => {
          this.showAbout();
        }
      },
      {
        label: 'Help', icon: 'fa-question-circle', command: () => { this.openDocumentation(); }
      },
      {
        label: 'Logout', icon: 'fa-sign-out', command: () => {
          this.logout();
        }
      },

    ];
  }

  navigate(targetUrl: string) {
  }

  private logout() {

  }

  private openDocumentation() {

  }



  private openUserProfile() {
  }


  private showAbout() {

  }

}

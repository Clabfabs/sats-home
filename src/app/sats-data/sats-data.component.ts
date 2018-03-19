import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SatsDataComponent {
  sats: SatsObj;

  backupVersion: string;
  backupDate: string;
  satsBackup: SatsObj;

  constructor(private http: Http) {
    this.backupVersion = '0.6.0';
    this.backupDate = '2018-03-19';
    this.satsBackup = {
      html_url: 'https://github.com/spectrumauctions/sats/releases/tag/v' + this.backupVersion,
      tag_name: 'v' + this.backupVersion,
      assets: [{browser_download_url: 'https://github.com/spectrumauctions/sats/releases/download/v'
        + this.backupVersion + '/sats-' + this.backupVersion + '.jar'}],
      published_at: this.backupDate
    };
    this.http.get('https://api.github.com/repos/spectrumauctions/sats/releases/latest')
      .subscribe(res => this.sats = res.json());
  }

  getSats() { return this.sats ? this.sats : this.satsBackup; }
  getSatsTag() { return this.sats ? this.sats.tag_name : this.satsBackup.tag_name; }
  getSatsUrl() { return this.sats ? this.sats.html_url : this.satsBackup.html_url }
  getSatsDate() { return this.sats ? this.sats.published_at : this.satsBackup.published_at }
  getSatsJarUrl() { return this.sats ? this.sats.assets[0].browser_download_url :
    this.satsBackup.assets[0].browser_download_url; }

}

interface SatsObj {
  html_url: string;
  tag_name: string;
  assets: any[];
  published_at: string;
}

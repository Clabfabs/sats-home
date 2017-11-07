import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SatsDataComponent {
  satsCore: SatsObj;
  satsClt: SatsObj;
  satsOpt: SatsObj;

  backupVersion: string;
  backupDate: string;
  satsCltBackup: SatsObj;
  satsCoreBackup: SatsObj;
  satsOptBackup: SatsObj;

  constructor(private http: Http) {
    this.backupVersion = '0.5.2';
    this.backupDate = '2017-11-06';
    this.satsCltBackup = {
      html_url: 'https://github.com/spectrumauctions/sats-clt/releases/tag/v' + this.backupVersion,
      tag_name: 'v' + this.backupVersion,
      assets: [{browser_download_url: 'https://github.com/spectrumauctions/sats-clt/releases/download/v'
        + this.backupVersion + '/sats.jar'}],
      published_at: this.backupDate
    };
    this.satsCoreBackup = {
      html_url: 'https://github.com/spectrumauctions/sats-core/releases/tag/v' + this.backupVersion,
      tag_name: 'v' + this.backupVersion,
      assets: [{browser_download_url: 'https://github.com/spectrumauctions/sats-core/releases/download/v'
        + this.backupVersion + '/sats-core-' + this.backupVersion + '.jar'}],
      published_at: this.backupDate
    };
    this.satsOptBackup = {
      html_url: 'https://github.com/spectrumauctions/sats-opt/releases/tag/v' + this.backupVersion,
      tag_name: 'v' + this.backupVersion,
      assets: [{browser_download_url: 'https://github.com/spectrumauctions/sats-opt/releases/download/v'
        + this.backupVersion + '/sats-opt-' + this.backupVersion + '.jar'}],
      published_at: this.backupDate
    };

    this.http.get('https://api.github.com/repos/spectrumauctions/sats-clt/releases/latest')
      .subscribe(res => this.satsClt = res.json());
    this.http.get('https://api.github.com/repos/spectrumauctions/sats-core/releases/latest')
      .subscribe(res => this.satsCore = res.json());
    this.http.get('https://api.github.com/repos/spectrumauctions/sats-opt/releases/latest')
      .subscribe(res => this.satsOpt = res.json());
  }

  getClt() { return this.satsClt ? this.satsClt : this.satsCltBackup }
  getCore() { return this.satsCore ? this.satsCore : this.satsCoreBackup; }
  getOpt() { return this.satsOpt ? this.satsOpt : this.satsOptBackup; }

  getCltTag() { return this.satsClt ? this.satsClt.tag_name : this.satsCltBackup.tag_name; }
  getCoreTag() { return this.satsCore ? this.satsCore.tag_name : this.satsCoreBackup.tag_name; }
  getOptTag() { return this.satsOpt ? this.satsOpt.tag_name : this.satsOptBackup.tag_name; }

  getCltUrl() { return this.satsClt ? this.satsClt.html_url : this.satsCltBackup.html_url }
  getCoreUrl() { return this.satsCore ? this.satsCore.html_url : this.satsCoreBackup.html_url }
  getOptUrl() { return this.satsOpt ? this.satsOpt.html_url : this.satsOptBackup.html_url }

  getCltDate() { return this.satsClt ? this.satsClt.published_at : this.satsCltBackup.published_at }
  getCoreDate() { return this.satsCore ? this.satsCore.published_at : this.satsCoreBackup.published_at }
  getOptDate() { return this.satsOpt ? this.satsOpt.published_at : this.satsOptBackup.published_at }

  getCltJarUrl() { return this.satsClt ? this.satsClt.assets[0].browser_download_url : this.satsCltBackup.assets[0].browser_download_url; }
  getCoreJarUrl() { return this.satsCore ? this.satsCore.assets[0].browser_download_url :
    this.satsCoreBackup.assets[0].browser_download_url; }
  getOptJarUrl() { return this.satsOpt ? this.satsOpt.assets[0].browser_download_url : this.satsOptBackup.assets[0].browser_download_url; }

}

interface SatsObj {
  html_url: string;
  tag_name: string;
  assets: any[];
  published_at: string;
}

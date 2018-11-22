import {Injectable} from '@angular/core';
import {ShareService} from '../gallery/share.service';
import {PhotoDTO} from '../../../common/entities/PhotoDTO';
import {MediaDTO} from '../../../common/entities/MediaDTO';

@Injectable()
export class QueryService {

  public static readonly PHOTO_PARAM = 'p';

  constructor(private shareService: ShareService) {
  }

  getParams(media?: MediaDTO): { [key: string]: string } {
    const query = {};
    if (media) {
      query[QueryService.PHOTO_PARAM] = media.name;
    }
    if (this.shareService.isSharing()) {
      query['sk'] = this.shareService.getSharingKey();
    }
    return query;
  }

}
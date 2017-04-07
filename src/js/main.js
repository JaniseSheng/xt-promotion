import ajax,{viewData, getQueryString} from './effect';
import config from './config';

$(document).ready(function () {
    ajax(config.subtract.api, viewData);
});

'use strict';!function(require,directRequire){const a={},b=1,c=2,d=4,e=16,f=512;a.isStatusIgnored=function(a){return'number'!=typeof a&&(a=0),0<(a&16384)},a.isStatusNew=function(a){return'number'!=typeof a&&(a=0),0<(a&(128|b))},a.isStatusModified=function(a){return'number'!=typeof a&&(a=0),0<(a&(256|c|f|d|1024|e))},a.isStatusDeleted=function(a){return'number'!=typeof a&&(a=0),0<(a&(f|d))},a.isStatusStaged=function(a){return'number'!=typeof a&&(a=0),0<(a&(b|c|d|8|e))},a.isStatusConflict=function(a){return'number'!=typeof a&&(a=0),0<(32768&a)},module.exports=a}(require('lazyload'),require);
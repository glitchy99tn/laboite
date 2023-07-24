(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"scrollBarVisible":"rollOver","backgroundColorDirection":"vertical","class":"Player","scrollBarColor":"#000000","toolTipHorizontalAlign":"center","backgroundColorRatios":[0],"scrollBarWidth":10,"width":"100%","gap":10,"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":0.75,"paddingTop":0,"paddingLeft":0,"mouseWheelEnabled":true,"propagateClick":false,"id":"rootPlayer","paddingBottom":0,"horizontalAlign":"left","downloadEnabled":false,"overflow":"hidden","paddingRight":0,"verticalAlign":"top","defaultVRPointer":"laser","definitions": [{"class":"PanoramaCamera","hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"hfov":80,"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_811C06B0_88E9_F878_41AD_46613EE339B9","id":"panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_camera"},{"class":"PanoramaCamera","hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"hfov":80,"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_8118A6B0_88E9_F878_41D7_380D6A294CD0","id":"panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_camera"},{"class":"IconButton","toolTipHorizontalAlign":"center","width":34.45,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":false,"paddingLeft":0,"paddingBottom":0,"id":"IconButton_9854986A_88E9_68EB_4175_D2CC41A5EF9E","iconURL":"skin/IconButton_9854986A_88E9_68EB_4175_D2CC41A5EF9E.png","top":"3.25%","paddingRight":0,"height":31,"verticalAlign":"middle","maxHeight":128,"maxWidth":128,"borderRadius":0,"transparencyActive":true,"mode":"toggle","minHeight":1,"right":"1.38%","minWidth":1,"shadow":false,"borderSize":0,"data":{"name":"IconButton1493"}},{"class":"Panorama","hfovMin":"120%","vfov":180,"pitch":0,"id":"panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9","hfovMax":8070,"label":trans('panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9.label'),"adjacentPanoramas":[{"distance":4.97,"yaw":-2.19,"select":"this.overlay_8597CB59_88E9_A829_41CC_19DEF4F3127B.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_8597CB59_88E9_A829_41CC_19DEF4F3127B"},"class":"AdjacentPanorama","backwardYaw":2.55,"panorama":"this.panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C"}],"overlays":["this.overlay_8597CB59_88E9_A829_41CC_19DEF4F3127B"],"thumbnailUrl":"media/panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_t.jpg","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_t.jpg","cube":{"class":"ImageResource","levels":[{"width":15360,"rowCount":5,"url":"media/panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2560,"colCount":30,"tags":"ondemand"},{"width":9216,"rowCount":3,"url":"media/panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]},{"width":12288,"rowCount":1,"url":"media/panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"La Boite Vide 1"},"partial":false},{"arrowKeysAction":"translate","viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer"},{"class":"PanoramaCamera","hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"hfov":80,"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_82B1047C_8960_44F1_41C9_FFF5D1EDD96F","id":"panorama_82952FB1_8960_4473_41D0_333F98A4C11B_camera"},{"class":"ViewerArea","data":{"name":"Main Viewer"},"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesShadow":false,"playbackBarProgressOpacity":1,"subtitlesBottom":50,"toolTipFontWeight":"normal","width":"100%","toolTipBorderRadius":3,"paddingLeft":0,"toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"id":"MainViewer","toolTipShadowBlurRadius":3,"playbackBarProgressBackgroundColor":["#3399FF"],"paddingRight":0,"progressRight":0,"toolTipShadowOpacity":1,"transitionMode":"blending","playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","progressOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesTop":0,"subtitlesHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadWidth":6,"subtitlesTextShadowBlurRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"subtitlesGap":0,"progressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","displayTooltipInSurfaceSelection":true,"progressBarBackgroundColor":["#3399FF"],"subtitlesOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderColor":"#767676","height":"100%","playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","progressBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"playbackBarHeadBorderSize":0,"progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","progressBottom":0,"subtitlesBorderSize":0,"subtitlesPaddingBottom":5,"minHeight":50,"subtitlesPaddingRight":5,"playbackBarBottom":5,"progressHeight":10,"borderSize":0,"progressBorderSize":0,"translationTransitionDuration":1000,"subtitlesTextDecoration":"none","minWidth":100,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundOpacity":1,"progressBarBorderRadius":0,"toolTipHorizontalAlign":"center","toolTipTextShadowOpacity":0,"playbackBarOpacity":1,"progressBarBorderSize":0,"toolTipPaddingRight":6,"playbackBarHeight":10,"playbackBarRight":0,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"subtitlesPaddingTop":5,"playbackBarBackgroundColorDirection":"vertical","paddingTop":0,"playbackBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"transitionDuration":500,"toolTipFontColor":"#606060","playbackBarHeadShadowHorizontalLength":0,"toolTipShadowVerticalLength":0,"progressBorderRadius":0,"progressLeft":0,"surfaceReticleOpacity":0.6,"paddingBottom":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","displayTooltipInTouchScreens":true,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontWeight":"normal","playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarHeadHeight":15,"subtitlesFontColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowColor":"#000000","toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","toolTipShadowColor":"#333333","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"playbackBarHeadShadow":true,"subtitlesVerticalAlign":"bottom","toolTipBorderSize":1,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"toolTipFontStyle":"normal","toolTipOpacity":1,"playbackBarHeadBorderRadius":0,"borderRadius":0,"subtitlesPaddingLeft":5,"playbackBarLeft":0,"subtitlesEnabled":true,"shadow":false,"playbackBarHeadOpacity":1,"vrPointerColor":"#FFFFFF"},{"class":"Panorama","hfovMin":"120%","vfov":180,"pitch":0,"id":"panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C","hfovMax":120,"label":trans('panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C.label'),"adjacentPanoramas":[{"distance":3.73,"yaw":177.29,"select":"this.overlay_86D8544A_88E8_B828_41B4_33483465D5EC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_86D8544A_88E8_B828_41B4_33483465D5EC"},"class":"AdjacentPanorama","backwardYaw":2.55,"panorama":"this.panorama_82952FB1_8960_4473_41D0_333F98A4C11B"},{"distance":3.74,"yaw":2.55,"select":"this.overlay_86C64663_88EF_B819_41CD_3A0A27E896A0.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_86C64663_88EF_B819_41CD_3A0A27E896A0"},"class":"AdjacentPanorama","backwardYaw":-2.19,"panorama":"this.panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9"}],"overlays":["this.overlay_86D8544A_88E8_B828_41B4_33483465D5EC","this.overlay_86C64663_88EF_B819_41CD_3A0A27E896A0"],"thumbnailUrl":"media/panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_t.jpg","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_t.jpg","cube":{"class":"ImageResource","levels":[{"width":15360,"rowCount":5,"url":"media/panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2560,"colCount":30,"tags":"ondemand"},{"width":9216,"rowCount":3,"url":"media/panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]},{"width":12288,"rowCount":1,"url":"media/panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"La Boite Vide 2"},"partial":false},{"class":"Panorama","hfovMin":"120%","vfov":180,"pitch":0,"id":"panorama_82952FB1_8960_4473_41D0_333F98A4C11B","hfovMax":120,"label":trans('panorama_82952FB1_8960_4473_41D0_333F98A4C11B.label'),"adjacentPanoramas":[{"distance":3.74,"yaw":2.55,"select":"this.overlay_8419F0AB_8963_DC10_41D8_D94A29E120A2.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_8419F0AB_8963_DC10_41D8_D94A29E120A2"},"class":"AdjacentPanorama","backwardYaw":177.29,"panorama":"this.panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C"}],"overlays":["this.overlay_8419F0AB_8963_DC10_41D8_D94A29E120A2"],"thumbnailUrl":"media/panorama_82952FB1_8960_4473_41D0_333F98A4C11B_t.jpg","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_82952FB1_8960_4473_41D0_333F98A4C11B_t.jpg","cube":{"class":"ImageResource","levels":[{"width":15360,"rowCount":5,"url":"media/panorama_82952FB1_8960_4473_41D0_333F98A4C11B_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2560,"colCount":30,"tags":"ondemand"},{"width":9216,"rowCount":3,"url":"media/panorama_82952FB1_8960_4473_41D0_333F98A4C11B_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_82952FB1_8960_4473_41D0_333F98A4C11B_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_82952FB1_8960_4473_41D0_333F98A4C11B_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]},{"width":12288,"rowCount":1,"url":"media/panorama_82952FB1_8960_4473_41D0_333F98A4C11B_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"La Boite Vide 3"},"partial":false},{"items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","camera":"this.panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_8392A8A4_88E9_E818_41C4_AE76E9551AF9"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","camera":"this.panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_81346D6E_88E9_E8EB_419D_E4F28C209B6C"},{"camera":"this.panorama_82952FB1_8960_4473_41D0_333F98A4C11B_camera","class":"PanoramaPlayListItem","media":"this.panorama_82952FB1_8960_4473_41D0_333F98A4C11B","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_811C06B0_88E9_F878_41AD_46613EE339B9"},{"restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_8118A6B0_88E9_F878_41D7_380D6A294CD0"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_85C54BB6_88E9_A878_41D9_BEC0BE6497B3"],"items":[{"distance":100,"yaw":-2.19,"class":"HotspotPanoramaOverlayImage","hfov":4.17,"horizontalAlign":"center","vfov":2.36,"data":{"label":"Circle Arrow 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_866BBC3D_8983_6251_41D1_EA2D2D78CBF3","pitch":-18.88,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03b"},"id":"overlay_8597CB59_88E9_A829_41CC_19DEF4F3127B"},{"restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_82B1047C_8960_44F1_41C9_FFF5D1EDD96F"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_86DFA44B_88E8_B828_41CC_BDD04086E507"],"items":[{"distance":100,"yaw":177.29,"class":"HotspotPanoramaOverlayImage","hfov":4.17,"horizontalAlign":"center","vfov":2.36,"data":{"label":"Circle Arrow 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_866A4C3D_8983_6251_41D5_914691345EE4","pitch":-24.51,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03b"},"id":"overlay_86D8544A_88E8_B828_41B4_33483465D5EC"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_86C69663_88EF_B819_41D4_BFF60C22B4D4"],"items":[{"distance":100,"yaw":2.55,"class":"HotspotPanoramaOverlayImage","hfov":4.17,"horizontalAlign":"center","vfov":2.36,"data":{"label":"Circle Arrow 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_866A1C3D_8983_6251_41D8_3063BAA80863","pitch":-24.46,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03b"},"id":"overlay_86C64663_88EF_B819_41CD_3A0A27E896A0"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_841FE0AC_8963_DC10_41D5_27CA39BBE723"],"items":[{"distance":100,"yaw":2.55,"class":"HotspotPanoramaOverlayImage","hfov":4.17,"horizontalAlign":"center","vfov":2.36,"data":{"label":"Circle Arrow 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_866A2C3D_8983_6251_41CA_465AD5166B96","pitch":-24.46,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03b"},"id":"overlay_8419F0AB_8963_DC10_41D8_D94A29E120A2"},{"id":"HotspotPanoramaOverlayArea_85C54BB6_88E9_A878_41D9_BEC0BE6497B3","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"frameCount":24,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_866BBC3D_8983_6251_41D1_EA2D2D78CBF3","levels":[{"height":360,"width":524,"url":"media/res_87B70CDC_88EB_E82F_41DA_9FE80E992906_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_86DFA44B_88E8_B828_41CC_BDD04086E507","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"frameCount":24,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_866A4C3D_8983_6251_41D5_914691345EE4","levels":[{"height":360,"width":524,"url":"media/res_87B70CDC_88EB_E82F_41DA_9FE80E992906_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_86C69663_88EF_B819_41D4_BFF60C22B4D4","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"frameCount":24,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_866A1C3D_8983_6251_41D8_3063BAA80863","levels":[{"height":360,"width":524,"url":"media/res_87B70CDC_88EB_E82F_41DA_9FE80E992906_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_841FE0AC_8963_DC10_41D5_27CA39BBE723","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"frameCount":24,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_866A2C3D_8983_6251_41CA_465AD5166B96","levels":[{"height":360,"width":524,"url":"media/res_87B70CDC_88EB_E82F_41DA_9FE80E992906_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41}],"scrollBarMargin":2,"backgroundPreloadEnabled":true,"height":"100%","backgroundColor":["#FFFFFF"],"children":["this.MainViewer","this.IconButton_9854986A_88E9_68EB_4175_D2CC41A5EF9E"],"scripts":{"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizStart":TDV.Tour.Script.quizStart,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoForward":TDV.Tour.Script.historyGoForward,"shareSocial":TDV.Tour.Script.shareSocial,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getKey":TDV.Tour.Script.getKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizFinish":TDV.Tour.Script.quizFinish,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupImage":TDV.Tour.Script.showPopupImage,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"clone":TDV.Tour.Script.clone,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaByName":TDV.Tour.Script.getMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"historyGoBack":TDV.Tour.Script.historyGoBack,"cloneCamera":TDV.Tour.Script.cloneCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"init":TDV.Tour.Script.init,"playAudioList":TDV.Tour.Script.playAudioList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"openLink":TDV.Tour.Script.openLink,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initQuiz":TDV.Tour.Script.initQuiz,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"registerKey":TDV.Tour.Script.registerKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"unregisterKey":TDV.Tour.Script.unregisterKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"mixObject":TDV.Tour.Script.mixObject,"initAnalytics":TDV.Tour.Script.initAnalytics,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"isPanorama":TDV.Tour.Script.isPanorama,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"existsKey":TDV.Tour.Script.existsKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPixels":TDV.Tour.Script.getPixels,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setLocale":TDV.Tour.Script.setLocale,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setValue":TDV.Tour.Script.setValue,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"downloadFile":TDV.Tour.Script.downloadFile,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"textToSpeech":TDV.Tour.Script.textToSpeech,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"translate":TDV.Tour.Script.translate,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode},"layout":"absolute","mobileMipmappingEnabled":false,"buttonToggleFullscreen":"this.IconButton_9854986A_88E9_68EB_4175_D2CC41A5EF9E","borderRadius":0,"scrollBarOpacity":0.5,"start":"this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_9854986A_88E9_68EB_4175_D2CC41A5EF9E].forEach(function(component) { component.set('visible', false); }) }","contentOpaque":false,"minHeight":20,"data":{"name":"Player540","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}},"minWidth":20,"shadow":false,"desktopMipmappingEnabled":false,"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Mon Jul 24 2023
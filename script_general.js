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
    var d = {"gap":10,"class":"Player","data":{"name":"Player530","locales":{"fr":"locale/fr.txt"},"defaultLocale":"fr","textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1}},"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"children":["this.MainViewer"],"width":"100%","toolTipHorizontalAlign":"center","vrPolyfillScale":0.75,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","propagateClick":false,"paddingTop":0,"backgroundOpacity":1,"paddingBottom":0,"paddingLeft":0,"downloadEnabled":false,"scrollBarMargin":2,"paddingRight":0,"overflow":"hidden","scrollBarOpacity":0.5,"scripts":{"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"cloneCamera":TDV.Tour.Script.cloneCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupImage":TDV.Tour.Script.showPopupImage,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getKey":TDV.Tour.Script.getKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openLink":TDV.Tour.Script.openLink,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getOverlays":TDV.Tour.Script.getOverlays,"existsKey":TDV.Tour.Script.existsKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"isPanorama":TDV.Tour.Script.isPanorama,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizStart":TDV.Tour.Script.quizStart,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"unregisterKey":TDV.Tour.Script.unregisterKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizFinish":TDV.Tour.Script.quizFinish,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playAudioList":TDV.Tour.Script.playAudioList,"initQuiz":TDV.Tour.Script.initQuiz,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setValue":TDV.Tour.Script.setValue,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initAnalytics":TDV.Tour.Script.initAnalytics,"getComponentByName":TDV.Tour.Script.getComponentByName,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"translate":TDV.Tour.Script.translate,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"mediaActivationMode":"window","backgroundPreloadEnabled":true,"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"scrollBarWidth":10,"mobileMipmappingEnabled":false,"contentOpaque":false,"defaultVRPointer":"laser","scrollBarColor":"#000000","desktopMipmappingEnabled":false,"borderRadius":0,"definitions": [{"closeButtonRollOverIconLineWidth":2,"closeButtonRollOverBackgroundColorRatios":[0],"class":"Window","backgroundColorRatios":[],"width":400,"modal":true,"headerVerticalAlign":"middle","id":"window_70B6A3B8_7E3D_A082_41D9_700DE452EB07","closeButtonPaddingTop":0,"shadowColor":"#000000","closeButtonPaddingRight":0,"backgroundOpacity":1,"hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"paddingLeft":0,"closeButtonRollOverBorderColor":"#000000","showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"closeButtonPaddingBottom":0,"closeButtonIconHeight":12,"paddingRight":0,"closeButtonPressedBackgroundOpacity":0,"closeButtonPressedIconColor":"#FFFFFF","title":trans('window_70B6A3B8_7E3D_A082_41D9_700DE452EB07.title'),"closeButtonIconColor":"#000000","bodyPaddingRight":5,"footerBackgroundOpacity":1,"closeButtonBackgroundColorRatios":[],"height":600,"backgroundColor":[],"headerPaddingRight":10,"titlePaddingLeft":5,"scrollBarWidth":10,"headerPaddingLeft":10,"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"contentOpaque":false,"bodyBackgroundColorDirection":"vertical","veilColorRatios":[0,1],"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"titlePaddingRight":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"titlePaddingTop":5,"closeButtonPressedBorderSize":0,"minHeight":20,"shadowOpacity":0.5,"minWidth":20,"closeButtonPressedBorderColor":"#000000","shadowHorizontalLength":3,"borderSize":0,"closeButtonRollOverBackgroundOpacity":0,"layout":"vertical","closeButtonBorderSize":0,"gap":10,"backgroundColorDirection":"vertical","bodyPaddingLeft":5,"closeButtonBackgroundColor":[],"titleHorizontalAlign":"left","footerHeight":5,"toolTipHorizontalAlign":"center","closeButtonRollOverIconColor":"#FFFFFF","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonBorderRadius":11,"paddingTop":0,"footerBackgroundColorDirection":"vertical","horizontalAlign":"center","propagateClick":false,"scrollBarMargin":2,"headerBackgroundColorRatios":[0,0.1,1],"closeButtonIconWidth":12,"veilOpacity":0.4,"shadowSpread":1,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"paddingBottom":0,"titleFontSize":"1.29vmin","bodyPaddingBottom":5,"closeButtonPressedBackgroundColor":["#3A1D1F"],"overflow":"scroll","scrollBarOpacity":0.5,"closeButtonPressedBackgroundColorRatios":[0],"veilColor":["#000000","#000000"],"headerBackgroundOpacity":1,"verticalAlign":"middle","bodyPaddingTop":5,"closeButtonRollOverBackgroundColor":["#C13535"],"titleFontColor":"#000000","closeButtonPressedIconLineWidth":2,"children":["this.htmlText_70BFE3B0_7E3D_A082_41CC_D936D9CD802E"],"scrollBarColor":"#000000","closeButtonRollOverBorderSize":0,"headerPaddingTop":10,"bodyBackgroundOpacity":1,"headerBackgroundColorDirection":"vertical","titlePaddingBottom":5,"closeButtonBackgroundOpacity":0,"borderRadius":5,"closeButtonPaddingLeft":0,"shadowVerticalLength":0,"closeButtonBorderColor":"#000000","titleFontFamily":"Arial","headerPaddingBottom":10,"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonIconLineWidth":2,"scrollBarVisible":"rollOver","footerBackgroundColorRatios":[0,0.9,1],"veilColorDirection":"horizontal","shadow":true,"shadowBlurRadius":6,"data":{"name":"Window4273"}},{"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"displayPlaybackBar":true,"zoomEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"class":"Panorama","overlays":["this.overlay_728A912F_7E3D_E19E_41D6_164055C54B40"],"vfov":180,"hfovMin":"120%","partial":false,"thumbnailUrl":"media/panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_t.jpg","id":"panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD","frames":[{"cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":15360,"rowCount":5,"url":"media/panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2560,"colCount":30},{"tags":"ondemand","width":9216,"rowCount":3,"url":"media/panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12},{"tags":["ondemand","preload"],"width":3072,"rowCount":1,"url":"media/panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6}]},"thumbnailUrl":"media/panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"label":trans('panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD.label'),"hfov":360,"data":{"label":"la boite Preview 4"},"pitch":0},{"items":[{"camera":"this.panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_camera","media":"this.panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"subtitlesGap":0,"class":"ViewerArea","subtitlesPaddingLeft":5,"playbackBarBackgroundColorDirection":"vertical","width":"100%","playbackBarBorderRadius":0,"playbackBarBorderSize":0,"subtitlesPaddingRight":5,"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","id":"MainViewer","toolTipShadowOpacity":1,"subtitlesBorderSize":0,"paddingLeft":0,"paddingRight":0,"toolTipShadowBlurRadius":3,"toolTipBorderRadius":3,"subtitlesBottom":50,"progressBackgroundColorRatios":[0],"transitionMode":"blending","playbackBarRight":0,"progressOpacity":1,"playbackBarBottom":5,"toolTipFontSize":"1.11vmin","progressBarBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","toolTipShadowVerticalLength":0,"translationTransitionDuration":1000,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"height":"100%","playbackBarHeadBorderRadius":0,"progressBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressRight":0,"playbackBarHeadShadowOpacity":0.7,"displayTooltipInSurfaceSelection":true,"subtitlesTextShadowColor":"#000000","subtitlesFontFamily":"Arial","subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","playbackBarProgressOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"toolTipBorderColor":"#767676","subtitlesFontSize":"3vmin","toolTipBackgroundColor":"#F6F6F6","playbackBarOpacity":1,"subtitlesTextDecoration":"none","subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"progressBackgroundOpacity":1,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"doubleClickAction":"toggle_fullscreen","progressBarOpacity":1,"subtitlesPaddingBottom":5,"playbackBarLeft":0,"progressBottom":0,"minHeight":50,"subtitlesBackgroundColor":"#000000","playbackBarBackgroundOpacity":1,"minWidth":100,"borderSize":0,"playbackBarHeadHeight":15,"toolTipFontStyle":"normal","progressBarBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","progressBorderSize":0,"toolTipHorizontalAlign":"center","toolTipShadowSpread":0,"toolTipPaddingRight":6,"paddingTop":0,"progressHeight":10,"transitionDuration":500,"propagateClick":false,"playbackBarHeadShadow":true,"paddingBottom":0,"subtitlesShadow":false,"playbackBarHeadOpacity":1,"firstTransitionDuration":0,"toolTipFontColor":"#606060","surfaceReticleColor":"#FFFFFF","toolTipTextShadowOpacity":0,"vrPointerSelectionColor":"#FF6600","subtitlesVerticalAlign":"bottom","subtitlesFontWeight":"normal","surfaceReticleOpacity":0.6,"toolTipFontWeight":"normal","toolTipPaddingBottom":4,"progressLeft":0,"toolTipShadowHorizontalLength":0,"progressBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"progressBorderRadius":0,"surfaceReticleSelectionOpacity":1,"vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowBlurRadius":3,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipShadowColor":"#333333","toolTipPaddingLeft":6,"subtitlesHorizontalAlign":"center","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowOpacity":1,"toolTipBorderSize":1,"playbackBarProgressBorderRadius":0,"subtitlesTop":0,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesOpacity":1,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"playbackBarProgressBackgroundColor":["#3399FF"],"borderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowColor":"#000000","vrPointerColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"toolTipOpacity":1,"shadow":false,"data":{"name":"Main Viewer"}},{"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_77CA8D93_7E3C_A086_41D8_5F8D30523F58","hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_759FA7A4_7E3C_A082_41B4_518F2291F1AD_camera"},{"class":"HTMLText","toolTipHorizontalAlign":"center","width":"100%","paddingTop":10,"id":"htmlText_70BFE3B0_7E3D_A082_41CC_D936D9CD802E","propagateClick":false,"backgroundOpacity":0,"paddingBottom":10,"paddingRight":10,"paddingLeft":10,"scrollBarOpacity":0.5,"height":"100%","scrollBarWidth":10,"scrollBarColor":"#000000","html":trans('htmlText_70BFE3B0_7E3D_A082_41CC_D936D9CD802E.html'),"scrollBarHorizontalMargin":-3,"borderRadius":0,"minHeight":0,"scrollBarVisible":"always","minWidth":0,"shadow":false,"borderSize":0,"data":{"name":"HTMLText4274"}},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"yaw":-94.08,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","hfov":1.77,"vfov":2.21,"verticalAlign":"middle","image":"this.AnimatedImageResource_710B745C_7E44_A782_41CD_566F963A073C","data":{"label":"Info 02"},"pitch":-19.42,"scaleMode":"fit_inside"}],"data":{"label":"Info 02"},"areas":["this.HotspotPanoramaOverlayArea_7330014D_7E3D_E182_419B_308C45EED26D"],"id":"overlay_728A912F_7E3D_E19E_41D6_164055C54B40"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_77CA8D93_7E3C_A086_41D8_5F8D30523F58"},{"rowCount":6,"frameCount":24,"class":"AnimatedImageResource","levels":[{"height":336,"width":224,"url":"media/res_6C6FF13D_7E44_A182_41D8_1C6BE92CBB08_0.png","class":"ImageResourceLevel"}],"frameDuration":41,"colCount":4,"id":"AnimatedImageResource_710B745C_7E44_A782_41CD_566F963A073C"},{"mapColor":"any","click":"this.showWindow(this.window_70B6A3B8_7E3D_A082_41D9_700DE452EB07, null, false)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_7330014D_7E3D_E182_419B_308C45EED26D"}],"layout":"absolute","minHeight":20,"scrollBarVisible":"rollOver","start":"this.init()","minWidth":20,"shadow":false,"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sat Jul 22 2023
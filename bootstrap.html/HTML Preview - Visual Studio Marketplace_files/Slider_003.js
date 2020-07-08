define("OfficeFabric/components/Slider/Slider.scss",["require","exports","@microsoft/load-themed-styles"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i.loadStyles([{rawString:".root_369b92c1{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.titleLabel_369b92c1{padding:0}.line_369b92c1{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.line_369b92c1 .lineContainer_369b92c1{border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box}.container_369b92c1{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.valueLabel_369b92c1{-ms-flex-negative:1;flex-shrink:1;width:30px;line-height:1}.slideBox_369b92c1{background:transparent;border:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;line-height:28px}.slideBox_369b92c1::-moz-focus-inner{border:0}.slideBox_369b92c1{outline:transparent}.slideBox_369b92c1{position:relative}.ms-Fabric--isFocusVisible .slideBox_369b92c1:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "},{theme:"focusBorder",defaultValue:"#000000"},{rawString:"}.slideBox_369b92c1 .thumb_369b92c1{border:2px solid "},{theme:"neutralSecondary",defaultValue:"#666666"},{rawString:";-webkit-box-sizing:border-box;box-sizing:border-box;background:"},{theme:"white",defaultValue:"#ffffff"},{rawString:";display:block;width:16px;height:16px;position:absolute;border-radius:10px}.rootIsHorizontal_369b92c1 .line_369b92c1{width:100%}.rootIsHorizontal_369b92c1 .line_369b92c1 .lineContainer_369b92c1{height:4px}.rootIsHorizontal_369b92c1 .slideBox_369b92c1{height:28px;padding:0 8px}.rootIsHorizontal_369b92c1 .slideBox_369b92c1 .thumb_369b92c1{top:-6px}html[dir='ltr'] .rootIsHorizontal_369b92c1 .slideBox_369b92c1 .thumb_369b92c1{-webkit-transform:translateX(-50%);transform:translateX(-50%)}html[dir='rtl'] .rootIsHorizontal_369b92c1 .slideBox_369b92c1 .thumb_369b92c1{-webkit-transform:translateX(50%);transform:translateX(50%)}.rootIsHorizontal_369b92c1 .valueLabel_369b92c1{margin:0 8px;white-space:nowrap;width:40px}.rootIsVertical_369b92c1{margin-right:8px}.rootIsVertical_369b92c1 .line_369b92c1{height:100%;width:4px;margin:0 auto;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.rootIsVertical_369b92c1 .line_369b92c1 .lineContainer_369b92c1{width:4px;height:100%}.rootIsVertical_369b92c1 .slideBox_369b92c1{height:100%;width:28px;padding:8px 0}.rootIsVertical_369b92c1 .slideBox_369b92c1 .thumb_369b92c1{left:-6px;margin:0 auto;-webkit-transform:translateY(8px);transform:translateY(8px)}.rootIsVertical_369b92c1 .container_369b92c1{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;text-align:center;margin:8px 0}.rootIsVertical_369b92c1 .valueLabel_369b92c1{margin:0 auto;white-space:nowrap;width:40px}.activeSection_369b92c1{background:"},{theme:"neutralSecondary",defaultValue:"#666666"},{rawString:"}@media screen and (-ms-high-contrast: active){.activeSection_369b92c1{background-color:WindowText}}.inactiveSection_369b92c1{background:"},{theme:"neutralTertiaryAlt",defaultValue:"#c8c8c8"},{rawString:"}@media screen and (-ms-high-contrast: active){.inactiveSection_369b92c1{border:1px solid WindowText}}.showTransitions_369b92c1 .thumb_369b92c1{-webkit-transition:left .367s cubic-bezier(0.1, 0.9, 0.2, 1);transition:left .367s cubic-bezier(0.1, 0.9, 0.2, 1)}.showTransitions_369b92c1 .activeSection_369b92c1,.showTransitions_369b92c1 .inactiveSection_369b92c1{-webkit-transition:width .367s cubic-bezier(0.1, 0.9, 0.2, 1);transition:width .367s cubic-bezier(0.1, 0.9, 0.2, 1)}.rootIsEnabled_369b92c1 .slideBox_369b92c1:hover .thumb_369b92c1,.rootIsEnabled_369b92c1 .slideBox_369b92c1:active .thumb_369b92c1{border:2px solid "},{theme:"themePrimary",defaultValue:"#0078d4"},{rawString:"}@media screen and (-ms-high-contrast: active){.rootIsEnabled_369b92c1 .slideBox_369b92c1:hover .thumb_369b92c1,.rootIsEnabled_369b92c1 .slideBox_369b92c1:active .thumb_369b92c1{border-color:Highlight}}.rootIsEnabled_369b92c1 .slideBox_369b92c1:hover .activeSection_369b92c1,.rootIsEnabled_369b92c1 .slideBox_369b92c1:active .activeSection_369b92c1{background-color:"},{theme:"themePrimary",defaultValue:"#0078d4"},{rawString:"}@media screen and (-ms-high-contrast: active){.rootIsEnabled_369b92c1 .slideBox_369b92c1:hover .activeSection_369b92c1,.rootIsEnabled_369b92c1 .slideBox_369b92c1:active .activeSection_369b92c1{background-color:Highlight}}.rootIsEnabled_369b92c1 .slideBox_369b92c1:hover .inactiveSection_369b92c1,.rootIsEnabled_369b92c1 .slideBox_369b92c1:active .inactiveSection_369b92c1{background-color:"},{theme:"themeLight",defaultValue:"#c7e0f4"},{rawString:"}@media screen and (-ms-high-contrast: active){.rootIsEnabled_369b92c1 .slideBox_369b92c1:hover .inactiveSection_369b92c1,.rootIsEnabled_369b92c1 .slideBox_369b92c1:active .inactiveSection_369b92c1{border-color:Highlight}}.rootIsEnabled_369b92c1 .slideBox_369b92c1:active .thumb_369b92c1{border:2px solid "},{theme:"themeDarkAlt",defaultValue:"#106ebe"},{rawString:"}.rootIsEnabled_369b92c1 .slideBox_369b92c1:active .activeSection_369b92c1{background-color:"},{theme:"themeDarkAlt",defaultValue:"#106ebe"},{rawString:"}.rootIsDisabled_369b92c1 .thumb_369b92c1{border-color:"},{theme:"neutralTertiaryAlt",defaultValue:"#c8c8c8"},{rawString:"}@media screen and (-ms-high-contrast: active){.rootIsDisabled_369b92c1 .thumb_369b92c1{border-color:GrayText}}@media screen and (-ms-high-contrast: active){.rootIsDisabled_369b92c1 .activeSection_369b92c1,.rootIsDisabled_369b92c1 .inactiveSection_369b92c1{background-color:GrayText;border-color:GrayText}}.rootIsDisabled_369b92c1 .activeSection_369b92c1{background:"},{theme:"neutralTertiaryAlt",defaultValue:"#c8c8c8"},{rawString:"}.rootIsDisabled_369b92c1 .inactiveSection_369b92c1{background:"},{theme:"neutralLight",defaultValue:"#eaeaea"},{rawString:"}\n"}]);t.root="root_369b92c1";t.titleLabel="titleLabel_369b92c1";t.line="line_369b92c1";t.lineContainer="lineContainer_369b92c1";t.container="container_369b92c1";t.valueLabel="valueLabel_369b92c1";t.slideBox="slideBox_369b92c1";t.thumb="thumb_369b92c1";t.rootIsHorizontal="rootIsHorizontal_369b92c1";t.rootIsVertical="rootIsVertical_369b92c1";t.activeSection="activeSection_369b92c1";t.inactiveSection="inactiveSection_369b92c1";t.showTransitions="showTransitions_369b92c1";t.rootIsEnabled="rootIsEnabled_369b92c1";t.rootIsDisabled="rootIsDisabled_369b92c1"});


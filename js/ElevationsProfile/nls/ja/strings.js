﻿define({
  display: {
    elevationProfileTitle: "標高グラフ",
    showMe: "表示",
    selectLine: "マップ内のフィーチャを<b>選択します</b>。",
    popupRequirement: "注意: フィーチャはポップアップが有効になっているレイヤ内にある必要があります。",
    digitizeDistanceMeasureTool: "<b>計測</b>ツールを使用します。",
    selectFeatureHelpUrl: "http://help.arcgis.com/ja/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/ja/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "地形の断面図をマウスでポイントすると、断面図上に標高値とマップ上に位置が表示されます。"
  },
  buttons: {
    measureLabel: "計測",
    helpLabel: "ヘルプ"
  },
  chart: {
    title: "標高グラフ",
    demResolution:"DEM 解像度",
    elevationTitleTemplate: "標高 ({0})",
    distanceTitleTemplate: "距離 ({0})",
    gainLossTemplate: "最小: {min}   最大: {max}   始点: {start}   終点: {end}   標高差: {gainloss}"
  },
  errors: {
    MissingConstructorParameters: "コンストラクタ パラメータが見つかりません。",
    InvalidConfiguration: "構成が無効です。",
    UnableToProcessResults: "解析結果を処理できません。"
  }
});

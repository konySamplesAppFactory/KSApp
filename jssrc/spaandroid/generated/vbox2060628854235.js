function initializevbox2060628854235() {
    vbox2060628854235 = new kony.ui.Box({
        "id": "vbox2060628854235",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox117989725233990 = new kony.ui.Box({
        "id": "hbox117989725233990",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2117989725233991 = new kony.ui.Image2({
        "id": "image2117989725233991",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 15, 0, 15],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 90,
        "referenceWidth": 444,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox117989725233990.add(image2117989725233991);
    vbox2060628854235.add(hbox117989725233990);
}
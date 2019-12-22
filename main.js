require(["esri/views/SceneView", "esri/WebMap", "esri/widgets/LayerList"], function(SceneView, WebMap, LayerList) {
        /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
        var webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "d04db6fb32b24a7e9464c5333a9355f0"
          }
        });

        /************************************************************
         * Set the WebMap instance to the map property in a MapView.
         ************************************************************/
        var view = new SceneView({
          map: webmap,
          container: "viewDiv"
        });
		
		 // Add a legend instance to the panel of a
        // ListItem in a LayerList instance
        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: function(event) {
            const item = event.item;
            if (item.layer.type != "group") {
              // don't show legend twice
              item.panel = {
                content: "legend",
                open: true
              };
            }
          }
        });
        view.ui.add(layerList, "top-right");
      });